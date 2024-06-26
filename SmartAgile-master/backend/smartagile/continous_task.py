import time
import os
import psycopg2
import pywinctl
import threading
from pynput import mouse, keyboard
from datetime import datetime
from django.conf import settings
import ctypes
import joblib
import logging
import pandas as pd

rf_model_path = os.path.join(os.path.dirname(__file__), 'models', 'rf_model.pkl')
rf_model = joblib.load(rf_model_path)
svm_model_path=os.path.join(os.path.dirname(__file__), 'models', 'svm_pipeline.pkl')
svm_model=joblib.load(svm_model_path)
app_vectorizer_model_path=os.path.join(os.path.dirname(__file__), 'models', 'app_vectorizer.pkl')
app_model=joblib.load(app_vectorizer_model_path)
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')  # Replace 'backend.settings' with your project settings module
import django
django.setup()

running_flag = False
thread = None
from sklearn.exceptions import DataConversionWarning
import warnings
# Suppress specific warnings
warnings.filterwarnings('ignore', category=DataConversionWarning)
top_100_browsers_list = [
    "chrome.exe", "safari.exe", "msedge.exe", "firefox.exe", "samsunginternet.exe", "opera.exe",
    "uc.exe", "brave.exe", "vivaldi.exe", "tor.exe", "maxthon.exe", "qqbrowser.exe", "yandex.exe",
    "baidu.exe", "avastsecure.exe", "epicprivacy.exe", "puffin.exe", "dolphin.exe", "duckduckgoprivacy.exe",
    "waterfox.exe", "palemoon.exe", "comododragon.exe", "slimbrowser.exe", "midori.exe", "falkon.exe",
    "gnuicecat.exe", "seamonkey.exe", "srwareiron.exe", "ghosteryprivacy.exe", "aloha.exe", "orion.exe",
    "opeaneon.exe", "sleipnir.exe", "konqueror.exe", "otter.exe", "polarity.exe", "cliqz.exe", "cent.exe",
    "librewolf.exe", "colibri.exe", "dooble.exe", "min.exe", "avirascout.exe", "blackhawk.exe", "basilisk.exe",
    "blisk.exe", "coowon.exe", "coccoc.exe", "qtebrowser.exe", "surf.exe", "uzbl.exe", "xb.exe", "smooz.exe", "tenta.exe",
    "iron.exe", "beaker.exe", "lucid.exe", "fennecfdroid.exe", "privacy.exe", "whale.exe", "kaios.exe",
    "smarttv.exe", "operagx.exe", "netscape.exe", "iexplore.exe", "nokia.exe", "blackberry.exe", "silk.exe",
    "bolt.exe", "skyfire.exe", "rockmelt.exe", "camino.exe", "shiira.exe", "avant.exe", "lunascape.exe",
    "k-meleon.exe", "slimjet.exe", "sputnik.exe", "chromium.exe", "msedgelegacy.exe", "epic.exe", "superbird.exe",
    "centaury.exe", "arcticfox.exe", "iceweasel.exe", "roccat.exe", "sunrise.exe", "wyzo.exe", "element.exe", "elinks.exe",
    "xombrero.exe", "neturf.exe", "galeon.exe", "amaya.exe", "arora.exe", "rekonq.exe", "jumanji.exe", "flock.exe", "phoenix.exe",
    "firewebnavigator.exe"

]

def get_active_window_info():
    try:
        # Initialize COM library (important for certain Windows operations)
        ctypes.windll.ole32.CoInitialize(None)

        active_window = pywinctl.getActiveWindow()
        if active_window is not None:
            window_title = active_window.title
            app_name = active_window.getAppName()
            return window_title, app_name
        else:
            return None, None
    except Exception as e:
        print(f"Error getting active window info: {e}")
        return None, None
    finally:
        # Uninitialize COM library
        ctypes.windll.ole32.CoUninitialize()

def on_click(x, y, button, pressed):
    global click_count
    if pressed:
        click_count += 1
        reset_idle_timer()
    return True

def on_scroll(x, y, dx, dy):
    global scroll_count
    scroll_count += 1
    reset_idle_timer()
    return True

def on_press(key):
    global keystroke_count
    keystroke_count += 1
    reset_idle_timer()
    return True

click_count = 0
scroll_count = 0
keystroke_count = 0
last_activity_time = datetime.now()

def reset_idle_timer():
    global last_activity_time
    last_activity_time = datetime.now()

def check_idle_time():
    global last_activity_time
    idle_time = (datetime.now() - last_activity_time).total_seconds()
    return idle_time

def track_application_usage(user_id):
    table_suffix = f"_{user_id}"
    global click_count, scroll_count, keystroke_count
    
    db_settings = settings.DATABASES['default']
    conn = psycopg2.connect(
        dbname=db_settings['NAME'],
        user=db_settings['USER'],
        password=db_settings['PASSWORD'],
        host=db_settings['HOST'],
        port=db_settings['PORT']
    )
    cursor = conn.cursor()

    cursor.execute(f"""
        CREATE TABLE IF NOT EXISTS application_usage{table_suffix} (
            ID SERIAL PRIMARY KEY,
            ApplicationName TEXT,
            Task TEXT,
            Category TEXT,
            Duration REAL,
            IdleTime REAL,
            Keystrokes REAL,
            Clicks REAL,
            Scrolls REAL,
            Date DATE,
            UNIQUE (ApplicationName, Task, Date)
        )
    """)

    cursor.execute(f"""
        CREATE TABLE IF NOT EXISTS browser_usage{table_suffix} (
            ID SERIAL PRIMARY KEY,
            BrowserName TEXT,
            Website TEXT,
            Category TEXT,
            Duration REAL,
            IdleTime REAL,
            Keystrokes REAL,
            Clicks REAL,
            Scrolls REAL,
            Date DATE,
            UNIQUE (BrowserName, Website, Date)
        )
    """)

    cursor.execute(f"""
        CREATE TABLE IF NOT EXISTS application_openings_count{table_suffix} (
            ID SERIAL PRIMARY KEY,
            ApplicationName TEXT UNIQUE,
            OpenCount INT
        )
    """)
    conn.commit()

    previous_window = None
    start_time = time.time()
    mouse_listener = mouse.Listener(on_click=on_click, on_scroll=on_scroll)
    keyboard_listener = keyboard.Listener(on_press=on_press)

    mouse_listener.start()
    keyboard_listener.start()
    loaded_pipeline = joblib.load(svm_model_path)
    vectorizer_app = joblib.load(app_vectorizer_model_path)
    model = joblib.load(rf_model_path)

    logging.info("Loaded models and vectorizers.")
    try:
        while running_flag:
            active_window = get_active_window_info()

            if active_window != previous_window:
                if previous_window is not None:
                    end_time = time.time()
                    time_spent = end_time - start_time
                    idle_time = check_idle_time()

                    task, app_name = previous_window

                    if app_name is not None:
                        if any(browser in app_name for browser in top_100_browsers_list):
                            browser_name = next((browser for browser in top_100_browsers_list if browser in app_name), "Unknown Browser")
                            prediction_input = pd.DataFrame([task], columns=['Task'])
                            predicted_category = loaded_pipeline.predict(prediction_input)[0]

                            cursor.execute(f"""
                                INSERT INTO browser_usage{table_suffix} (BrowserName, Website, Category,Duration, IdleTime, Keystrokes, Clicks, Scrolls, Date)
                                VALUES (%s, %s, %s, %s, %s, %s, %s, %s,CURRENT_DATE)
                                ON CONFLICT (BrowserName, Website, Date)
                                DO UPDATE SET
                                Keystrokes = browser_usage{table_suffix}.Keystrokes + EXCLUDED.Keystrokes,
                                Clicks = browser_usage{table_suffix}.Clicks + EXCLUDED.Clicks,
                                Scrolls = browser_usage{table_suffix}.Scrolls + EXCLUDED.Scrolls,
                                IdleTime = browser_usage{table_suffix}.IdleTime + EXCLUDED.IdleTime,
                                Duration = browser_usage{table_suffix}.Duration + EXCLUDED.Duration
                            """, (browser_name, task, predicted_category,time_spent, idle_time, keystroke_count, click_count, scroll_count))
                        else:
                            new_app_vectorized = vectorizer_app.transform([app_name])
                            input_data = pd.DataFrame(new_app_vectorized.toarray(), columns=vectorizer_app.get_feature_names_out())
                            predicted_category = model.predict(input_data)[0]
                            cursor.execute(f"""
                                INSERT INTO application_usage{table_suffix} (ApplicationName, Task,Category, Duration, IdleTime, Keystrokes, Clicks, Scrolls, Date)
                                VALUES (%s, %s, %s, %s, %s, %s, %s, %s,CURRENT_DATE)
                                ON CONFLICT (ApplicationName, Task, Date)
                                DO UPDATE SET
                                Keystrokes = application_usage{table_suffix}.Keystrokes + EXCLUDED.Keystrokes,
                                Clicks = application_usage{table_suffix}.Clicks + EXCLUDED.Clicks,
                                Scrolls = application_usage{table_suffix}.Scrolls + EXCLUDED.Scrolls,
                                IdleTime = application_usage{table_suffix}.IdleTime + EXCLUDED.IdleTime,
                                Duration = application_usage{table_suffix}.Duration + EXCLUDED.Duration
                            """, (app_name, task, predicted_category,time_spent, idle_time, keystroke_count, click_count, scroll_count))

                        conn.commit()

                        cursor.execute(f"""
                            INSERT INTO application_openings_count{table_suffix} (ApplicationName, OpenCount)
                            VALUES (%s, 1)
                            ON CONFLICT (ApplicationName)
                            DO UPDATE SET OpenCount = application_openings_count{table_suffix}.OpenCount + 1
                        """, (app_name,))
                        conn.commit()

                click_count = 0
                scroll_count = 0
                keystroke_count = 0

                previous_window = active_window
                start_time = time.time()
                reset_idle_timer()

            time.sleep(5)

    except Exception as e:
        print(f"Exception occurred: {e}")
    finally:
        mouse_listener.stop()
        keyboard_listener.stop()
        conn.close()

def start_continous_task(user_id):
    global running_flag, thread
    if not running_flag:
        running_flag = True
        thread = threading.Thread(target=track_application_usage, args=(user_id,))
        thread.start()
        print(f"Task started for user: {user_id}")

def stop_continous_task():
    global running_flag, thread
    if running_flag:
        running_flag = False
        if thread is not None:
            thread.join()
        print("Task stopped")
