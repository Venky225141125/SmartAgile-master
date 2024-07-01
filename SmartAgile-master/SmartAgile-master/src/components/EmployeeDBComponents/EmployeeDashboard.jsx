import { Box, Tabs, Tab } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import AttendanceIcon from '@mui/icons-material/AccessTime';
import ProjectIcon from '@mui/icons-material/Folder';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import EHome from './EHome';
import Tasks from './Tasks';
import Attendance from './Attendance';
import Projects from './Projects';
import AppsWebsites from './AppsWebsites';
import Settings from './Settings';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import React,{ useState, useEffect ,useRef  } from 'react';
import { Switch } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const EmployeeDashboard = () => {
  const user=JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');
  };
  const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const currentPath = location.pathname;
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

  
    const menuItems = [
      { text: ' Sprint Dashboard ', path: '/admin/sprint-dashboard' },
      { text: ' Admin Dashboard', path: '/admin/admin-dashboard' },
      { text: ' Group Dashboard', path: '/group/dashboard' },
      { text: ' Employee Dashboard ', path: '/employee/dashboard' },
    ];
    const [anchorE2, setAnchorE2] = useState(null);
    const handleMenuOpen1 = (event) => {
      setAnchorE2(event.currentTarget);
    };
  
    const handleMenuClose1 = () => {
      setAnchorE2(null);
    };
    const menuItemsOne = [
      { text: ' Profile', path: '/employee-profiles' },
      { text: ' Settings', path: '/admin/admin-dashboard' },
      { text: ' Logout', path: '/group/dashboard' },
      
    ];

  
  
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
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems.map((item) => (
          item.path !== currentPath && (
            <MenuItem
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              key={item.text}
            >
              {item.text}
            </MenuItem>
          )
        ))}
      </Menu>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            SmartAgile
          </Typography>
          <Typography variant="h6" noWrap sx={{ flexGrow: 20 }}>
            <Timer/>
          </Typography>
          <Typography>
          <IconButton edge="start" color="inherit" aria-label="menu"  onClick={handleMenuOpen1}>
          <Avatar alt="User Avatar" src={user.profile_photo ? `http://localhost:8000${user.profile_photo}` : ''} />
          </IconButton>
          <Menu
        anchorE2={anchorE2}
        open={Boolean(anchorE2)}
        onClose={handleMenuClose1}
      >
        {menuItemsOne.map((item) => (
          item.path !== currentPath && (
            <MenuItem
              component={Link}
              to={item.path}
              onClick={handleMenuClose1}
              key={item.text}
            >
              {item.text}
            </MenuItem>
          )
        ))}
      </Menu>
      </Typography>
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
          <Tab icon={<TaskIcon />} label="Tasks" {...a11yProps(1)} />
          <Tab icon={<AttendanceIcon />} label="Attendance" {...a11yProps(2)} />
          <Tab icon={<ProjectIcon />} label="Projects" {...a11yProps(3)} />
          <Tab icon={<AppsIcon />} label="Apps & Websites" {...a11yProps(4)} />
          <Tab icon={<SettingsIcon />} label="Settings" {...a11yProps(5)} />
          
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1, ml: 6 ,mt:2}}>
        <TabPanel value={value} index={0}>
          <EHome />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tasks />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Attendance />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <AppsWebsites />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Settings />
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
export default EmployeeDashboard;