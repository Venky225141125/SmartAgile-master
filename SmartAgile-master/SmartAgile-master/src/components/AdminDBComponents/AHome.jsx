
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, CardContent, Typography, IconButton} from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import React from "react";
import { Avatar, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


ChartJS.register(ArcElement, Tooltip, Legend);
const StyledCard = styled(Card)(({ theme }) => ({
  width: 221, // Fixed width
  height: 100, // Fixed height
  borderRadius: 0, // Set border radius
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
  
  transition: 'transform 0.3s ease-in-out', // Add transition for animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale up on hover
  },
}));
const AHome = () => {

  return (
    <div className='flex flex-wrap gap-y-3'>
        <div className=''>
        <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        height:'100%',
        width: '100%',
        maxWidth: '100%', 
        marginRight:'100%',
        marginTop:2
        
      }}
    >
      <StyledCard>
        <CardContent>
          <Typography variant="p">Activity</Typography>
          <Typography variant='h5'>62%</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Online</Typography>
          <Typography variant='h5'>80</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Idle</Typography>
          <Typography variant='h5'>0</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Attended</Typography>
          <Typography variant='h5'>100</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="p">Leave</Typography>
          <Typography variant='h5'>10</Typography>
        </CardContent>
      </StyledCard>
    </Box>
        </div>
        <div>
          <EmployeeTable/>
        </div>
    </div>
  )
}

const employees = [
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    punchInTime: '09:00 AM',
    punchOutTime: '06:00 PM',
    productiveTime: '7h',
    unproductiveTime: '1h',
    productivity: 87,
    currentApp: 'VSCode',
    duration: '3h',
    active: true,
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jane Smith',
    designation: 'Product Manager',
    punchInTime: '09:30 AM',
    punchOutTime: '05:30 PM',
    productiveTime: '6h',
    unproductiveTime: '2h',
    productivity: 75,
    currentApp: 'Slack',
    duration: '2h',
    active: false,
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Alice Johnson',
    designation: 'UX Designer',
    punchInTime: '08:00 AM',
    punchOutTime: '04:00 PM',
    productiveTime: '7h',
    unproductiveTime: '1h',
    productivity: 90,
    currentApp: 'Figma',
    duration: '4h',
    active: true,
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Bob Brown',
    designation: 'DevOps Engineer',
    punchInTime: '10:00 AM',
    punchOutTime: '07:00 PM',
    productiveTime: '6.5h',
    unproductiveTime: '2.5h',
    productivity: 72,
    currentApp: 'Terminal',
    duration: '3.5h',
    active: false,
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Carol White',
    designation: 'QA Engineer',
    punchInTime: '09:15 AM',
    punchOutTime: '05:15 PM',
    productiveTime: '6h',
    unproductiveTime: '2h',
    productivity: 80,
    currentApp: 'JIRA',
    duration: '2h',
    active: true,
    avatar: 'https://via.placeholder.com/150'
  },
];

const EmployeeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Punch In Time</TableCell>
            <TableCell>Punch Out Time</TableCell>
            <TableCell>Productive Time</TableCell>
            <TableCell>Unproductive Time</TableCell>
            <TableCell>Productivity</TableCell>
            <TableCell>Current App</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index} className="bg-white hover:bg-gray-100">
              <TableCell>
                <Avatar src={employee.avatar} />
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.punchInTime}</TableCell>
              <TableCell>{employee.punchOutTime}</TableCell>
              <TableCell>{employee.productiveTime}</TableCell>
              <TableCell>{employee.unproductiveTime}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <CircularProgress variant="determinate" value={employee.productivity} />
                  <span className="ml-2">{employee.productivity}%</span>
                </div>
              </TableCell>
              <TableCell>{employee.currentApp}</TableCell>
              <TableCell>{employee.duration}</TableCell>
              <TableCell>{employee.active ? 'Active' : 'Inactive'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default AHome;