import Card from 'react-bootstrap/Card';
import './styles.css'
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';


function Attendance() {
  return (
    <>
    <div className='flex flex-nowrap gap-x-3'>
      <div className='shadow-xl'>
      <Card border="primary" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Office Time</p></Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='text-3xl ml-4'>08:39<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="secondary" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Active Time</p></Card.Header>
        <Card.Body>
          
          <Card.Text>
          <p className='text-3xl ml-4'>08:30<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="success" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Computer Activities</p></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className='text-3xl ml-4'>07:30<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="danger" style={{ width: '16.5rem' }}>
        <Card.Header><p className='text-sm ml-4 mt-3'>Mannual Activities</p></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className='text-3xl ml-4'>02:52<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      
    </div>
    <div className='grid grid-cols-3'>
    <EmpAttendance/>
    <EAttendance/>
    </div>
    
    </>
  );
}

const data2 = [
  { label: 'Late', value: 3 },
  { label: 'Present', value: 83 },
  { label: 'Absent', value: 24},

];

const EmpAttendance=() =>{
  return (
    <div className='bg-white w-72 rounded-lg shadow-2xl'>
      <p className='font-semiboid text-2xl mt-4 ml-4'>Attendance</p>
    <PieChart
      series={[
        {
          data: data2,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      width={300}

      slotProps={{
        legend: { hidden: false },
      }}
    />
    </div>
  );
}

const CircularProgressWithLabel = ({ value }) => (
  <Box position="relative" display="inline-flex">
    <Doughnut
      data={{
        labels: ['On time', 'Work from home', 'Late attendance', 'Absent'],
        datasets: [
          {
            data: [1031, 191, 212, 66],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
            hoverBackgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
          },
        ],
      }}
      
      options={{
        cutout: '70%',
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
        //maintainAspectRatio: false,
      }}
    />
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h5" component="div" color="textSecondary">
        {value}
      </Typography>
    </Box>
  </Box>
);
const EAttendance = () => {
  const total = 1434;
  const max = 1500;

  return (
    <div className='bg-white w-96 rounded-lg shadow-2xl'>
      <p className='font-semiboid text-2xl mt-4 ml-4'>My Attendance</p>
      <Box p={4} textAlign="center">
      <Box display="flex" justifyContent="center">
        <Box width={300} height={300}>
          <CircularProgressWithLabel value={`${total}/${max}`} />
        </Box>
      </Box>
      <Box mt={4}>
        <FormControlLabel
          control={<Checkbox checked color="primary" />}
          label="Better than 91.3% employees!"
        />
      </Box>
    </Box>
 

    </div>
  );
};

export default Attendance;