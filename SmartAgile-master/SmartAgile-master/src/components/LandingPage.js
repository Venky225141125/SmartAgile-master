import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation
import './landing.css'; // Make sure to adjust the path if necessary

const App = () => {
  return (
    
    <div className="relative w-full h-screen custom-bg overflow-hidden text-white flex">
      <div className=" h-full gradient-overlay w-1/2">
        <BasicTabs />
        <div className='ml-2'>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 50 }}>SmartAgile</h1>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 25 }}>AI-Driven tool for optimal workplace productivity</h1>
          <div className='mt-10'>
            <Animate />
          </div>
          <div className='w-96 border-l-2 border-x-neutral-400'>
            <p className="mt-3 mb-3 ml-2 ">Utilizing advanced AI, it accurately distinguishes between work-related and non-work activities on employee devices.</p>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
      <SimpleSlide/>
    </div>
    </div>
    
    
  );
};

const BasicTabs = () => {
  return (
    <nav className="shadow p-2 flex justify-center items-center bg-white ml-48 mr-48 h-fit rounded-3xl mt-1 mb-10">
      <div className='text-black'>
        <Link to="/" className='mx-2'>Home</Link>
        <Link to="/about" className="mx-2 ">About Us</Link>
        <Link to="/signup" className="mx-2">Register</Link>
        <Link to="/login" className="mx-2 ">Login</Link>
      </div>
      <GetStart />
    </nav>
  );
};

const Animate = () => {
  return (
    <TypeAnimation
      sequence={[
        'AI-Powered Activity Analysis',
        1000,
        'Agile Integration',
        1000,
        'Real-Time Productivity Insights',
        1000,
        'Privacy-Compliant Monitoring',
        1000,
        'Customizabe Dashboards',
        1000,
        'Automated Reporting',
        1000,
        'Secure Data Handling',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

const GetStart = () => {
  const navigate = useNavigate(); // useNavigate inside GetStart component

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Stack spacing={2} direction="row" marginLeft={48} onClick={handleLogin}>
      <ColorButton variant="contained" >Get Started</ColorButton>
    </Stack>
  );
};

const icon = (
  <Paper sx={{width: 700, height: 550, marginLeft:72, marginBottom: 2,marginTop:8 }} elevation={4}>
    <img src="./land2.jpg" alt="Your Image" style={{width:'100%',height:'100%'}} />
  </Paper>
);

const SimpleSlide = () => {
  const [checked, setChecked] = React.useState(true); // Set default to true

  return (
    <Box
      sx={{
        height:700,
        width:500,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
};

export default App;
