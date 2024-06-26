# Generated by Django 3.2.25 on 2024-06-02 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smartagile', '0003_auto_20240531_1124'),
    ]

    operations = [
        migrations.CreateModel(
            name='SignupData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Signup',
        ),
    ]
