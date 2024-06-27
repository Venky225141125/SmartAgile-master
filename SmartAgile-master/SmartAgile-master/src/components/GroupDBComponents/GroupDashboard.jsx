import React,{ useState, useEffect ,useRef  } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GHome from './GHome';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Switch } from '@mui/material';

const GroupDashboard = () => {
  const user=JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#3f51b5',
          height:55
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            SmartAgile
          </Typography>
          <Typography variant="h6" noWrap sx={{ flexGrow: 20 }}>
            <Timer/>
          </Typography>
          <Avatar alt="User Avatar" src={user.profile_photo ? `http://localhost:8000${user.profile_photo}` : ''} />
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className='mt-8'>
      <VerticalTabs/>
      </div>
      
      
    </Box>
  );
};


const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          position: 'fixed',
          height: '100%',
          bgcolor: 'background.paper',
          borderRight: 1,
          borderColor: 'divider',
          width: 64,
          mt: 3.5,
          borderRadius: 2, // Adjust the border radius as needed
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 72, // Adjust height for better appearance
              minWidth: 64,
              fontSize:10,
              '&.Mui-selected': {
                fontWeight: 'bold',
                borderRadius: 2,
                fontSize:10,
              },
            },
            '& .MuiTab-wrapper': {
              flexDirection: 'column',
            },
            '& .MuiTabs-indicator': {
              left: 0,
              width: '1%',
              borderRadius: 2,
              
            },
          }}
        >
          <Tab icon={<DashboardIcon />} label="Dashboard" {...a11yProps(0)} />
          
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1, ml: 8 }}>
        <TabPanel value={value} index={0}>
          <GHome />
        </TabPanel>
        
      </Box>
    </Box>
  );
};
const Timer = () => {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => clearInterval(timerRef.current);
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Switch
          checked={isOn}
          onChange={handleToggle}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: 'white',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: 'white',
            },
          }}
        />
      </div>
      <div className="text-sm mb-4">
        {isOn ? `Timer: ${formatTime(time)}` : 'Timer is off'}
      </div>
    </div>
  );
};
export default GroupDashboard;
