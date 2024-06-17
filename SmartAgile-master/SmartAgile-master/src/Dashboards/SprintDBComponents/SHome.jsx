import React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from 'react-bootstrap/Card';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { PieChart } from '@mui/x-charts/PieChart';

const SHome = () => {
  return (
    <>
    <div className='flex flex-nowrap gap-x-3'>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Select One or More Projects</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='text-3xl ml-4'>08:39<sup className='text-base'>h</sup></p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '13rem' }}>
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
            <Card border="primary" style={{ width: '13rem' }}>
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
            <Card border="primary" style={{ width: '13rem' }}>
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
            <Card border="primary" style={{ width: '13rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Office Time</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='text-3xl ml-4'>08:39<sup className='text-base'>h</sup></p>
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
    <TasksCharts/>
    </>
  );
};

const VelocityChart=()=> {
  return (
    <BarChart
      {...props}
      series={[
        { data: [15, 20, 25, 27, 23], label: 'Commitment' },
        { data: [15, 15, 20,26,20], label: 'Work Completed' },
      ]}
    />
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
  );
}
const TaskProgress=()=>{
    return(
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
        data: [{ value: 1.92 }, { value: 68.16 }, { value: 12.34 },{ value: 7.34 },{ value: 4.75 },{ value: 3.75 },{ value: 1.76 }],
        label: '',
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
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        spacing={1}
        sx={{ width: '50%' }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <ToggleButtonGroup
            value={chartType}
            exclusive
            onChange={handleChartType}
            aria-label="chart type"
            fullWidth
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
    );
  }
export default SHome;