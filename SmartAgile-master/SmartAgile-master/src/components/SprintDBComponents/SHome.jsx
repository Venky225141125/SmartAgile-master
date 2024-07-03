import React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from 'react-bootstrap/Card';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { PieChart } from '@mui/x-charts/PieChart';
import { Avatar, Typography, LinearProgress } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';


const SHome = () => {
  return (
    <>
    <div className='flex flex-nowrap gap-x-3'>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Select One or More Projects</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                       <select className='w-32 text-center ml-4 mt-4'>
                          <option>Project A</option>
                          <option>Project B</option>
                          <option>Project C</option>
                       </select>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Total worked Hours</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>654hr</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm '>Cycle Time</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                      <p className='font-semibold text-2xl ml-4'>3 Days</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Strory points</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div className='flex space-x-4'>
                    <h3 className="text-sm font-semibold mb-2" >Completed</h3> 
                    <h3 className="text-sm font-semibold mb-2" style={{ marginLeft: '30px' }}>Planned</h3>
                </div>
                <div className='flex space-x-4'>
                    <h3 className="text-base font-semibold mb-2" >87</h3>
                    <h3 className="text-base font-semibold mb-2" style={{ marginLeft: '80px' }}>110</h3>
                </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Tasks</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div className='flex space-x-4'>
                    <h3 className="text-sm font-semibold mb-2" >Completed</h3> 
                    <h3 className="text-sm font-semibold mb-2" style={{ marginLeft: '30px' }}>Assigned</h3>
                </div>
                <div className='flex space-x-4'>
                    <h3 className="text-base font-semibold mb-2" >87</h3>
                    <h3 className="text-base font-semibold mb-2" style={{ marginLeft: '80px' }}>110</h3>
                </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        
    </div>
    <div className='flex grid-cols-3'>
        <VelocityChart/>
        <BurnDownChart/>
        <TaskProgress/>
    </div>
    <div className='flex flex-nowrap gap-4'>
    <TasksCharts/>
    <ActiveSprint/>
    <SprintGoals/>
    
    </div>
    </>
  );
};

const VelocityChart=()=> {
  return (
    <div className='bg-white my-4 mr-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
      <h2 className='text-2xl text-center font-bold'>Velocity Chart</h2>
    <BarChart
      {...props}
      series={[
        { data: [15, 20, 25, 27, 23], label: 'Commitment' },
        { data: [15, 15, 20,26,20], label: 'Work Completed' },
      ]}
    />
    </div>
  );
}

const props = {
  width: 400,
  height: 300,
  xAxis: [{ data: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4','Sprint 5'], scaleType: 'band' }],
};

const uData = [23,90,70,50,25,0];
const pData = [65,90,80,55,45,30];

const xLabels = [
  '1 April',
  '3 April',
  '5 April',
  '7 April',
  '9 April',
  '11 April',
];

const BurnDownChart=()=> {
  return (
    <div className='bg-white my-4 mr-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
      <h2 className='text-2xl text-center font-bold'>Burndown Chart</h2>
    <LineChart
      width={400}
      height={300}
      series={[
        { data: uData, label: 'ideal', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'Actual', area: true, stack: 'total', showMark: false },
        
      ]}
      
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
    </div>
  );
}
const TaskProgress=()=>{
    return(
      <div className='bg-white my-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
        <p className='text-2xl font-semibold'>Completion of Work</p>
            <Gauge
            value={75}
            startAngle={-110}
            endAngle={110}
            height={200}
            width={250}
            sx={{
                [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                transform: 'translate(0px, 0px)',
                },
            }}
            text={
                ({ value, valueMax }) => `${value} / ${valueMax}`
            }
        />
        
        </div>
    );
};
const barChartsParams = {
    series: [
      { data: [68, 32, 8], label: 'Planned Tasks' },
      { data: [55, 23, 10], label: 'Completed Tasks' },
      
    ],
    height: 400,
  };
  
  const pieChartsParams = {
    series: [
      {
        data: [{ value: 1.92, name: 'code review' },
          { value: 68.16, name: 'Open' },
          { value: 12.34, name: 'closed' },
          { value: 7.34, name: 'On hold' },
          { value: 4.75, name: 'validated' },
          { value: 3.75, name: 'Work in progress' }],
        outerRadius: 100,
        innerRadius: 60,
        highlighted: { additionalRadius: 10 },
      },
    ],
    height: 400,
    width: 500,
    margin: { top: 50, bottom: 50 },
    
  };
  
  const TasksCharts=()=> {
    const [chartType, setChartType] = React.useState('bar');
    
    const [highlighted, setHighlighted] = React.useState('item');
    const [faded, setFaded] = React.useState('global');
  
    const handleChartType = (event, newChartType) => {
      if (newChartType !== null) {
        setChartType(newChartType);
      }
    };
  
    return (
      <div className='bg-white w-1/3 my-4 ml-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
        <h2 className='text-2xl font-semibold'>Tasks</h2>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        spacing={1}
        sx={{ width: '100%' }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <ToggleButtonGroup
            value={chartType}
            exclusive
            onChange={handleChartType}
            aria-label="chart type"
            
          >
            {['bar',  'pie'].map((type) => (
              <ToggleButton key={type} value={type} aria-label="left aligned">
                {type}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          
          {chartType === 'bar' && (
            <BarChart
              {...barChartsParams}
              series={barChartsParams.series.map((series) => ({
                ...series,
                highlightScope: {
                  highlighted,
                  faded,
                },
              }))}
            />
          )}
  
          {chartType === 'pie' && (
            
            <PieChart
              {...pieChartsParams}
              
              series={pieChartsParams.series.map((series) => ({
                ...series,
                highlightScope: {
                  highlighted,
                  faded,
                  
                },
               
              }))}
              
            />
            
            
          )}
        </Box>
      </Stack>
      </div>
    );
  }
  const ActiveSprint=()=>{
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    return(
      <div className='bg-white w-1/3 my-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
        <p className='text-2xl font-semibold ml-2'>Sprint Details</p>
        <h2 className='text-sm ml-2'>Active Sprint</h2>
          <div className="text-white">
            <div className=" bg-blue-600 p-4 rounded-lg my-4 mx-4">
              <p>Project Name</p>
              <p>P01:<strong>ProjectName1</strong></p>
              <hr/>
              <p>Sprint Owner</p>
              <strong>Sprint Owner Name</strong>
            </div>
            <div className=" bg-pink-600 p-4 rounded-lg my-4 mx-4">
              <p>Duration</p>
              <strong>01/Mar/2024</strong>
              <p>to</p>
              <strong>01/07/2024</strong>
              <hr/>
              <p>Estimation Points</p>
              <select className="form-select block w-2/4 px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                {numbers.map((number) => (
                  <option key={number} value={number}>
                    {number}<p>Pts</p>
                  </option>
                ))}
              </select>
            </div>
        </div>
      </div>
    );
  };
  const SprintGoals=()=>{
    return(
        <div className="bg-white text-black rounded-md w-80 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <SprintHealth/>
        <div className="flex items-center">
          <Typography variant="h6" className="ml-2">Sprint Goals</Typography>
        </div>
        <div className="space-y-2">
          {[1, 2].map((goal) => (
            <div key={goal} className="flex items-center p-2 rounded-md">
              <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }}>1</Avatar>
              <Typography variant="body1" className="ml-2">Sprint goal number one</Typography>
            </div>
          ))}
        </div>
        <Typography variant="body2" className="mt-2 text-gray-400">
          and 2 more goals
        </Typography>
        
      </div>
    );
  }
  const SprintHealth = () => {
    return (
      <div className="text-black p-4 rounded-md w-80">
        <div className="flex items-center mb-4">
          <Typography variant="h6" className="ml-2">Sprint Health</Typography>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Typography variant="body1">To do</Typography>
            <Typography variant="body1">37%</Typography>
          </div>
          <LinearProgress variant="determinate" value={37} sx={{ height: 10, bgcolor: 'gray', '& .MuiLinearProgress-bar': { bgcolor: blue[300] } }} />
  
          <div className="flex items-center justify-between">
            <Typography variant="body1">In progress</Typography>
            <Typography variant="body1">21%</Typography>
          </div>
          <LinearProgress variant="determinate" value={21} sx={{ height: 10, bgcolor: 'gray', '& .MuiLinearProgress-bar': { bgcolor: blue[700] } }} />
  
          <div className="flex items-center justify-between">
            <Typography variant="body1">Done</Typography>
            <Typography variant="body1">68%</Typography>
          </div>
          <LinearProgress variant="determinate" value={68} sx={{ height: 10, bgcolor: 'gray', '& .MuiLinearProgress-bar': { bgcolor: green[500] } }} />
        </div>
        <div className="mt-4">
          <Typography variant="body2" className="text-gray-400">4 days left</Typography>
          {/*<Typography variant="body2" className="text-red-500">1 blocker left</Typography>
          <Typography variant="body2" className="text-red-500 mt-2">
            <span className="text-red-600">↓</span> 50% scope change
          </Typography>*/}
        </div>
        <hr/>
      </div>
    );
  };
  
  
export default SHome;