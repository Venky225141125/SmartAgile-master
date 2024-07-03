import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label, ResponsiveContainer,
  } from 'recharts';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const GHome = () => {
  return (
    <div>
        <h2 className='text-2xl font-semibold mt-4'>Welcome to Group A,</h2>
        <div className='flex flex-wrap grid-cols-3 mt-4'>
            <Productivity/>
            <ProjectStatus/>
            <TimeTracking/>
        </div>
        <div className='flex flex-wrap grid-cols-3 mt-4'>
            <Performance/>
            <TeamProductivity/>
            <Attendance/>
            

        </div>
    </div>
  )
}
const data = [
    { id: 0, value: 75, label: 'Emp1' },
    { id: 1, value: 85, label: 'Emp2' },
    { id: 2, value: 50, label: 'Emp3' },
    { id: 3, value: 80, label: 'Emp4' },
    { id: 4, value: 60, label: 'Emp5' },
  ];
  
const Productivity=()=>{
  return(
    <div className='justify-center my-7 w-1/3 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
      <b className='my-3'>Productivity</b>
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
     
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'bottom', horizontal: 'right' },
          padding: 0,
        },
      }}
      height={200}
      width={350}
    />
    </div>
  );
}
const projectData = [
    { name: 'Project A', ProjectCompletion: 70 },
    { name: 'Project B', ProjectCompletion: 45 },
    { name: 'Project C', ProjectCompletion: 85 },
  ];
  
  
const ProjectStatus=()=>{
    return(
        <div className='justify-center ml-4 w-0.5/3 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
            <b>Project Status</b>
            <ResponsiveContainer width={300} height={300}>
                <BarChart
                    data={projectData}
                    margin={{
                    top: 20, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <defs>
                    <linearGradient id="colorZ" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#03c8a1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2235F1" stopOpacity={0.8}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="name">
                    </XAxis>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="ProjectCompletion" fill="url(#colorZ)" barSize={40} radius={[50, 50, 50, 50]}>
                    <LabelList dataKey="ProjectCompletion" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
const uData = [10,3,12,8,15];
const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'Fri',
];
const TimeTracking=()=>{
    return(
        <div className='w-1/3'>
            <b>Time Tracking</b>
            <LineChart
              width={480}
              height={300}
              series={[{ data: uData, label: 'Hours Worked', area: true, showMark: false }]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: 'none',
                },
              }}
            />
        </div>
          );
};
const performanceData = [
    { name: 'Emp 1', Performance: 90 },
    { name: 'Emp 2', Performance: 85 },
    { name: 'Emp 3', Performance: 80 },
    { name: 'Emp 4', Performance: 95 },
    { name: 'Emp 5', Performance: 88 },
  ];
  
const Performance=()=>{
    return(
    <div className='justify-center ml-4 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
            <b>Performance Summary</b>
            <ResponsiveContainer width={450} height={300}>
                <BarChart
                    data={performanceData}
                    margin={{
                    top: 20, right: 30, left: 10, bottom: 40,
                    }}
                >
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#68217A" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#009E49" stopOpacity={0.8}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="name">
                    </XAxis>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="Performance" fill="url(#colorUv)" barSize={40} radius={[50, 50, 50, 50]}>
                    <LabelList dataKey="Performance" position="top" label="ahdua"/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


const productivity = [85,88,90,92];
const week = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  
];

const TeamProductivity=() =>{
  return (
    <div className='justify-center ml-4 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
    <b>Team Productivity</b>
    <LineChart
      width={300}
      height={300}
      series={[
        { data: productivity, label: 'Group Productivity' },
        
      ]}
      xAxis={[{ scaleType: 'point', data: week}]}
    />
    </div>
  );
}
const attendance = [
  { label: 'Present', value: 80 },
  { label: 'Absent', value: 10 },
  { label: 'On leave', value: 5},
  
];

const Attendance=()=> {

  return (
    <div className='justify-center ml-4 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
    <b>Attendance</b>  
    <PieChart
      series={[
        {
          data: attendance,
          //cx: 500,
          //cy: 200,
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
export default GHome;