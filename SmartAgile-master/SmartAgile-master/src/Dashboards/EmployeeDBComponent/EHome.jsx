import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState} from 'react';
import { Pie } from 'react-chartjs-2';
import { FiPlay, FiPause, FiCheck } from 'react-icons/fi'; // Importing some icons from react-icons
import 'tailwindcss/tailwind.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


ChartJS.register(ArcElement, Tooltip, Legend);

const EHome = () => {

  return (
    <div className='bg-gray-100 flex flex-col'>
        <div className='grid grid-cols-6'>
            <KCard title='Desktime' content={'141h 39m'}/>
            <KCard title='Time At Work' content={'197h 57m'}/>
            <KCard title='Offline Time' content={<div className='text-3xl text-red-500'>8h 20m</div>}/>
            <KCard title='Projects Time' content={'2h 57m'}/>
            <KCard title='Effectiveness' content={'48.76%'}/>
            <KCard title='Productivity' content={'77.1%'}/>
        </div>
        <div className='flex flex-nowrap grid-cols-3 gap-x-4'>
          <ProjectTasks/>
          <ProductivityChart/>
          <Attendance/>
        </div>
        <div className='flex flex-nowrap grid-cols-2'>
          <EmployeeActivity/>
          <ScheduleCard/>
        </div>
    </div>
  )
}
const KCard = ({ title, content }) => {
    return (
      <div className="border rounded-lg p-4 w-40 h-24 m-2 shadow-lg flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl">
      <h4 className="text-base font-bold mb-2">{title}</h4>
      <div className="flex-grow flex items-center text-xl justify-center text-green-700">
        {content}
      </div>
    </div>
    );
  };
  const data = [
    { id: 0, value: 75, label: 'Productive' },
    { id: 1, value: 15, label: 'Unassigned' },
    { id: 2, value: 10, label: 'Unproductive' },
  ];
  
const Productivity=()=>{
  return(
    <div className='justify-center rounded-lg transition-shadow duration-300 hover:shadow-xl'>
      <b>Productivity</b>
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
const tasksData = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: false },
  { id: 3, name: 'Task 3', completed: false },
  { id: 4, name: 'Task 4', completed: false },
  { id: 5, name: 'Task 5', completed: false },
  
];


const ScheduleCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Schedule</h2>
        <div className="mb-4 flex items-center">
          <span className="text-gray-500 w-20">10:00 AM</span>
          <div className="bg-pink-500 text-white p-2 rounded-lg flex-1">
            <h3 className="font-semibold">Sprint Meeting</h3>
            <p className="text-sm">10:00 AM - 11:00 AM</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 w-20">11:00 AM</span>
          <div className="bg-yellow-400 text-white p-2 rounded-lg flex-1">
            <h3 className="font-semibold">Stakeholder Meeting</h3>
            <p className="text-sm">11:00 AM - 11:59 AM</p>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">Set Reminder</button>
      </div>
    </div>
  );
};
const Attendance=()=>{
  return (
    <div>
      <div className='bg-white h-28 rounded-lg w-98'>
      <b>Attendance</b><br/>
      <table className="table-auto h-20 border-collapse border border-gray-400">
        <tbody>
          <tr>
            <td className="border border-gray-300 w-32 text-center">Attendance<br/><b>28</b></td>
            <td className="border border-gray-300 w-24 text-center">Absent<br/><b>1</b></td>
            <td className="border border-gray-300 w-24 text-center">Late<br/><b>1</b></td>
          </tr>
        </tbody>
      </table>
      </div><br/>
      <EmpOnLeave/>
    </div>
  );
};
const employees = [
  {
    name: "Francis Tran",
    status: "Health is not good.",
    duration: "Only Today",
    imgUrl: "/emp3.jpg",
  },
  {
    name: "Katherine Webster",
    status: "Going on trip with my fam...",
    duration: "16th to 18th",
    imgUrl: "/emp3.jpg",
  },
];

const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img
          className="w-14 h-10 rounded-full"
          src={employee.imgUrl}
          alt={`${employee.name}`}
        />
        <div className="ml-3">
          <p className="text-base font-semibold text-gray-800">{employee.name}</p>
          <p className="text-sm text-gray-600">{employee.status}</p>
        </div>
      </div>
      <div className="text-red-500">
        {employee.duration}
      </div>
    </div>
  );
};

const EmpOnLeave = () => {
  return (
    <>
    <Productivity/><br/>
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Employees on holiday</h2>
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
      
    </div>
    
    </>
  );
};

const screenshots = [
  { title: "Sketch", time: "09:24", task: "Design System", name: "James Smith Anderson", department: "UX/UI Design", imageUrl: "/path/to/sketch.png" },
  { title: "Visual Studio", time: "09:48", task: "Refactor Code", name: "Andrew Freeman", department: "Software Development", imageUrl: "/path/to/visualstudio.png" },
  { title: "Word", time: "12:24", task: "Marketing", name: "Lauren Willis", department: "Marketing", imageUrl: "/path/to/word.png" },
  { title: "Facebook", time: "14:04", task: "Refactor Code", name: "Richard Everett", department: "Software Development", imageUrl: "/path/to/facebook.png" },
  { title: "Slack", time: "14:36", task: "A/B Testing", name: "Elizabeth Ferguson", department: "UX/UI Design", imageUrl: "/path/to/slack.png" }
];

const EmployeeActivity = () => {
  return (
    <div className="flex flex-nowrap justify-center">
      {screenshots.map((screenshot, index) => (
        <Card key={index} sx={{ maxWidth: 300, margin: 0.5, boxShadow: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={screenshot.imageUrl}
            title={screenshot.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {screenshot.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {screenshot.time} - {screenshot.task}
            </Typography>
            <Typography variant="body2" component="div">
              {screenshot.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {screenshot.department}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const ProductivityChart = () => {
  const data = {
    labels: ['Word', 'Google Drive', 'Gmail', 'Facebook', 'Other Productive', 'Other Unproductive', 'Other Neutral'],
    datasets: [
      {
        label: 'Productivity',
        data: [24, 18, 12, 8, 20, 10, 8],
        backgroundColor: [
          '#34D399', // Word - Productive
          '#3B82F6', // Google Drive - Neutral
          '#F97316', // Gmail - Unproductive
          '#EF4444', // Facebook - Unproductive
          '#10B981', // Other Productive
          '#F59E0B', // Other Unproductive
          '#9CA3AF', // Other Neutral
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed}%`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 w-72 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Top Apps and Websites Chart</h2>
      <Pie data={data} options={options} />
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 mr-2"></div>
          <span>Productive</span>
          <span className="ml-auto">64%</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-400 mr-2"></div>
          <span>Unproductive</span>
          <span className="ml-auto">20%</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-400 mr-2"></div>
          <span>Neutral</span>
          <span className="ml-auto">16%</span>
        </div>
      </div>
    </div>
  );
};
const tasks = [
  {
    title: "Task 1",
    status: "In progress",
    time: "3:44:03 h",
    color: "border-purple-500",
    icon: <FiPause className="text-red-500" />,
  },
  {
    title: "Task 2",
    status: "On hold",
    time: "2:21:13 h",
    color: "border-yellow-500",
    icon: <FiPlay className="text-purple-500" />,
  },
  {
    title: "Task 3",
    status: "In progress",
    time: "1:33:11 h",
    color: "border-yellow-500",
    icon: <FiPlay className="text-purple-500" />,
  },
  {
    title: "Task 4",
    status: "Done",
    time: "1:32:43 h",
    color: "bg-green-100 border-green-500",
    icon: <FiCheck className="text-green-500" />,
  },
];

const TaskCard = ({ task }) => {
  return (
    <div className={`flex justify-between items-center p-4 border-l-4 ${task.color} bg-white rounded-md shadow-sm mb-3`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.status}</p>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-semibold text-gray-900 mr-3">{task.time}</p>
        {task.icon}
      </div>
    </div>
  );
};

const ProjectTasks = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto ml-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Project 1</h2>
        <select className="text-sm text-gray-600 border-gray-300 rounded">
          <option>Recent time</option>
          <option>Oldest time</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="text-sm font-medium text-purple-600 border border-purple-600 rounded px-4 py-2">
          Add New Task
        </button>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search tasks" 
            className="pl-8 pr-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <svg className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-gray-900">Today</p>
          <p className="text-sm text-gray-600">Total 09:11:10 h</p>
        </div>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};



export default EHome;