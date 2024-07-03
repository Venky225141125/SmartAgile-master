import { PieChart } from '@mui/x-charts/PieChart';
import { Pie } from 'react-chartjs-2';
import { FiPlay, FiPause, FiCheck } from 'react-icons/fi'; // Importing some icons from react-icons
import 'tailwindcss/tailwind.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, CardMedia, CardContent, Typography, IconButton, bottomNavigationActionClasses, Hidden } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import TimerOffOutlinedIcon from '@mui/icons-material/TimerOffOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { bottom, right } from '@popperjs/core';
import React, { useMemo, useRef } from "react";
import * as d3 from "d3";
import styles from "./pie-chart.module.css";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp'; 
import { SiMicrosoftexcel } from 'react-icons/si';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 
import CodeSharpIcon from '@mui/icons-material/CodeSharp'; 

ChartJS.register(ArcElement, Tooltip, Legend);
const StyledCard = styled(Card)(({ theme }) => ({
  width: 185, // Fixed width
  height: 100, // Fixed height
  borderRadius: 0, // Set border radius
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
  
  transition: 'transform 0.3s ease-in-out', // Add transition for animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale up on hover
  },
}));
const EHome = () => {

  return (
    <div className='flex flex-wrap gap-y-3'>
        <div className=''>
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
          <Typography variant="p">Desktop Time</Typography>
          <Typography variant='h5'>20hr 20min</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <DesktopWindowsRoundedIcon />
        </IconButton>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Time At Work</Typography>
          <Typography variant='h5'>15h 40m</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <WorkHistoryOutlinedIcon />
        </IconButton>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Offline Time</Typography>
          <Typography variant='h5'>2h 13m</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <TimerOffOutlinedIcon/>
          </IconButton>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Projects Time</Typography>
          <Typography variant='h5'>3h 12m</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <AccessTimeOutlinedIcon/>
          </IconButton>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Effectiveness</Typography>
          <Typography variant='h5'>53.63%</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <CrisisAlertIcon />
          </IconButton>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Productivity</Typography>
          <Typography variant='h5'>72.54%</Typography>
          <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ top: '-4.5rem', right: '-8rem' }}
        >
          <TrendingUpIcon />
          </IconButton>
        </CardContent>
      </StyledCard>
    </Box>
        </div>
        <div className='flex flex-nowrap grid-cols-3 gap-x-2'>
          <ProjectTasks/>
          <ProductivityChart/>
          <Attendance/>
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
    <div>
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
          position: { horizontal: 'right',vertical:'top' },
          padding: -5,
        },
      }}
      height={200}
      
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
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">Schedule</h2>
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
        <div className='bg-white rounded-xl shadow-md space-y-4 justify-center mt-4'>
          <b className='text-2xl'>Attendance</b><br/>
          <div class="grid grid-cols-3 divide-x mt-2">
            <div>
              <p className='ml-2'>Present</p>
              <p className='text-center font-semibold'>28</p>
            </div>
            <div>
              <p className='ml-2'>Absent</p>
              <p className='ml-2'>1</p>
            </div>
            <div>
              <p className='ml-2'>Late</p>
              <p className='ml-2'>1</p>
            </div>
          </div>
        </div><br/>
        <div>
        <div className='bg-white rounded-xl shadow-md space-y-4 justify-center'>
        <ScheduleCard/>
      </div>
      
    </div>
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
    <div className='bg-white rounded-lg mt-2 mb-1 ml-4'>
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
 
  return (
    <div>
      <div className=' bg-white rounded-xl shadow-md space-y-4 justify-center mt-4'>
        <b className='text-2xl font-semibold'>Top Apps & Websites</b>
      <AppsndWeb data={apps_data} width={470} height={250}/>
      </div>
      <div className=' bg-white rounded-xl shadow-md space-y-4 justify-center mt-4'>
        <b className='text-2xl font-semibold'>Productivity</b>
        <Productivity/>
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
    <div className="p-6 bg-white rounded-lg shadow-md w-96 ml-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Project 1</h2>
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

const apps_data = [
    { name: "Word", value: 32,icon:<DescriptionSharpIcon sx={{ color: '#2b5797' }} /> },
    { name: "Facebook", value: 12 ,icon:<FacebookSharpIcon sx={{ color: '#3b5998' }} />},
    { name: "VS Code", value: 34,icon:<CodeSharpIcon sx={{ color: '#007acc' }} /> },
    { name: "WhatsApp", value: 18 ,icon:<WhatsAppIcon sx={{ color: '#25d366' }} />},
    { name: "Excel", value: 53,icon:<SiMicrosoftexcel style={{ color: '#217346' }} /> },
  ];
  
const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 0.5; // space between donut and label inflexion point

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#25D366",
];

const AppsndWeb = ({ width, height, data }) => {
  const ref = useRef(null);

  const radius = useMemo(() => Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2, [width, height]);

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = useMemo(() => pie.map((grp, i) => {
    const sliceInfo = {
      innerRadius: 15,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";

    return (
      
      <g
        key={i}
        className={styles.slice}
        //onMouseEnter={() => {
          //if (ref.current) {
           // ref.current.classList.add(styles.hasHighlight);
          //}
        //}}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
        }}
      >
        <path d={slicePath} fill={colors[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <foreignObject x={labelPosX - (isRightLabel ? 0 : 150)} y={inflexionPoint[1] - 10} width={150} height={30}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: isRightLabel ? "flex-start" : "flex-end" }}>
            {React.cloneElement(grp.data.icon, { style: { marginRight: 4, verticalAlign: 'middle' } })}
            <span style={{ fontSize: 13.5 }}>{grp.data.name}-{grp.data.value}%</span>
          </div>
        </foreignObject>
      </g>
    );
  }), [pie, radius, arcGenerator]);

  return (
    <div className=' bg-white rounded-xl shadow-md space-y-4 justify-center'>
        
        <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g
        transform={`translate(${width / 2}, ${height / 2})`}
        className={styles.container}
        ref={ref}
      >
        {shapes}
      </g>
    </svg>
      </div>
    
  );
};


export default EHome;