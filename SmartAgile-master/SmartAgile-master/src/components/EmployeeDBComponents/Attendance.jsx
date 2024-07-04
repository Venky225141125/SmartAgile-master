import React, { useState } from 'react';
import './styles.css'
import { PieChart } from '@mui/x-charts/PieChart';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography, Checkbox, FormControlLabel, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import 'tailwindcss/tailwind.css';
import { CardContent, IconButton, } from '@mui/material';
import Card from '@mui/material/Card';
import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import { left } from '@popperjs/core';
import Button from '@mui/material/Button';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 230, // Fixed width
  height: 109, // Fixed height
  borderRadius: 0, // Set border radius
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
  
  transition: 'transform 0.3s ease-in-out', // Add transition for animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale up on hover
  },
}));
function Attendance() {
  return (
    <>
    <div className='flex flex-wrap gap-y-3'>
        
        <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        height:'100%',
        width: '100%',
        maxWidth: '100%', // Ensure the container takes full width
        marginRight:'100%',
        
      }}
    >
      <StyledCard>
        <CardContent>
          <Typography variant="p">Office Time</Typography>
          <Typography variant='h5'>9hr 20min</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Active Time</Typography>
          <Typography variant='h5'>8h 40m</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Computer Activities</Typography>
          <Typography variant='h5'>7h 20m</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Mannual Activities</Typography>
          <Typography variant='h5'>2h</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography sx={{fontSize:"16px"}}>Attendance</Typography>
          <Typography><Activity/></Typography>
        </CardContent>
      </StyledCard>
    </Box>
    </div>
    <div className='flex grid-cols-3'>
      <TodayActivity/>
      <MyAttendance/>
    </div>
    </>
  );
}

const steps = [
  {
    title: 'Punch in at',
    time: '10:00 AM',
  },
  {
    title: 'Punch out at',
    time: '01:00 PM',
  },
  {
    title: 'Punch in at',
    time: '03:00 PM',
  },
  {
    title: 'Punch out at',
    time: '09:00 PM',
  },
];

function TodayActivity() {
  return (
    <Box sx={{ maxWidth: 360, margin: 'auto', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#2979ff' }}>
        Today Activity
      </Typography>
      <Stepper orientation="vertical" sx={{ paddingLeft: '20px' }}>
        {steps.map((step, index) => (
          <Step key={step.title} active={true}>
            <StepLabel
              icon={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CircleIcon sx={{ color: '#00bcd4', fontSize: 28 }} />
                </Box>
              }
            >
              <Typography sx={{ fontSize: '16px' }}>{step.title}</Typography>
            </StepLabel>
            <StepContent sx={{height:'10px'}}>
              <Typography sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ fontSize: '18px', marginRight: '5px' }} />
                {step.time}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
const Activity=()=>{
const [disabled, setDisabled] = useState(false);
const [timestamp, setTimestamp] = useState('');

const handleToggle = () => {
  setDisabled(!disabled);
  if (!disabled) {
    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setTimestamp(`${formattedDate} ${formattedTime}`);
  } else {
    setTimestamp('');
  }

};
  return(
    <div>
      <Button variant="contained" color="secondary" disabled={disabled} onClick={handleToggle} sx={{width:120}}>
      {disabled ? "Punch In" : "Punch In"}
      </Button>
      {disabled && (
        <div className="fixed">
          <p>{timestamp}</p>
        </div>
      )}
      </div>
  )
}
const MyAttendance=()=>{
  return(
    <PieChart
  series={[
    {
      data: [
        { id: 0, value: 20, label: 'On time' },
        { id: 1, value: 5, label: 'Late Attendance' },
        { id: 2, value: 6, label: 'Absent' },
      ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 2,
      cornerRadius: 5,
      startAngle: -360,
      endAngle: 180,
    }
  ]}
  height={300}
  width={500}
  slotProps={{
    legend: {
      direction:'column',
      position:{
        horizontal:'right',
        vertical:'middle'
      }
      
    },
  }}
/>
  )
}
export default Attendance;