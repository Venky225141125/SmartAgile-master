import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { FiPlay, FiPause, FiCheck } from 'react-icons/fi'; // Importing some icons from react-icons
import 'tailwindcss/tailwind.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, CardMedia, CardContent, Typography, IconButton, bottomNavigationActionClasses } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from 'react-bootstrap/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

const EHome = () => {

  return (
    <div className='flex flex-wrap gap-y-3'>
    <div className='flex flex-nowrap gap-x-2'>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Desktop Time</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>20h 20m</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Time At Work</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>15h 40m</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Offline Time</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>2h 13m</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Projects Time</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>3h 12m</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Effectiveness</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>53.3%</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        <div className='shadow-xl'>
            <Card border="primary" style={{ width: '11.5rem' }}>
                <Card.Header><p className='ml-4 mt-3 text-sm'>Productivity</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='font-semibold text-2xl ml-4'>72.54%</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
        </div>
        <div className='flex flex-nowrap grid-cols-3 gap-x-4'>
          <ProjectTasks/>
          <ProductivityChart/>
          <ScheduleCard/>
        </div>
        <div className='flex flex-nowrap grid-cols-2 gap-4'>
          <EmployeeActivity/>
          
        </div>
    
    </div>
  )
}
  const data = [
    { id: 0, value: 75, label: 'Productive' },
    { id: 1, value: 15, label: 'Unassigned' },
    { id: 2, value: 10, label: 'Unproductive' },
  ];
  
const Productivity=()=>{
  return(
    <div className='justify-center bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl'>
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
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <Attendance/>
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
      <Productivity/>
    </div>
  );
};
const Attendance=()=>{
  return (
    <div>
      <div className='bg-white h-20 rounded-lg w-98 border'>
      <b className='text-2xl ml-2'>Attendance</b><br/>
      <div className='flex gap-x-0.5 mt-2'>
      <div className='w-1/3 bg-slate-50 rounded-2xl ml-3'>
        <p className='ml-2'>Attendance</p>
        <p className='text-center font-semibold'>28</p>
      </div>
      <div className='w-1/3 bg-slate-50 rounded-2xl'>
        <p className='ml-2'>Absent</p>
        <p className='ml-2'>1</p>
      </div>
      <div className='w-1/3 bg-slate-50 rounded-2xl mr-2'>
        <p className='ml-2'>Late</p>
        <p className='ml-2'>1</p>
      </div>
      </div>
      </div><br/>
      
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

const scrollContainerStyle = {
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  padding: '10px 0',
  width: '700px', // Width set to accommodate 3 cards at a time
};

const cardStyle = {
  minWidth: 220,
  margin: '0 10px',
  boxShadow: 3,
};

const EmployeeActivity = () => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' }); // Scroll by one card width
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' }); // Scroll by one card width
    }
  };

  return (
    <div className='bg-white rounded-lg my-4 ml-4'>
      <p className='text-2xl font-semibold mb-2'>Recent Activity</p>
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={scrollLeft}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={scrollContainerStyle} ref={scrollRef}>
          {screenshots.map((screenshot, index) => (
            <Card key={index} sx={cardStyle}>
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
        </Box>
        <IconButton onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </div>
  );
};

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
        display: true,
        
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
    <div className="p-4 w-84 bg-white rounded-xl shadow-md space-y-4 justify-center">
      <h2 className="text-xl font-bold">Top Apps and Websites Chart</h2>
      <Pie data={data} options={options} width={450} height={450}/>
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
    <div className="p-6 bg-white rounded-lg shadow-md w-84 ml-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Project 1</h2>
        <select className="text-sm text-gray-600 border-gray-300 rounded">
          <option>Recent time</option>
          <option>Oldest time</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="text-sm w-15 h-10 text-purple-600 border border-purple-600 rounded mr-3">
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