// src/components/EmployeeActivityTable.js
import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { format } from 'date-fns';
import {
  Mail as MailIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  LinkedIn as LinkedInIcon,
  Assessment as AssessmentIcon,
  VideoCall as VideoCallIcon,
  YouTube as YouTubeIcon,
  InsertChart as InsertChartIcon,
  GitHub as GitHubIcon,
  ViewList as ViewListIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import './styles.css'
const getIcon = (app) => {
  switch (app) {
    case 'Slack':
      return <ChatIcon style={{ color: '#4A154B' }} />;
    case 'Gmail':
      return <MailIcon style={{ color: '#D93025' }} />;
    case 'Visual Studio Code':
      return <CodeIcon style={{ color: '#007ACC' }} />;
    case 'JIRA':
      return <WorkIcon style={{ color: '#0052CC' }} />;
    case 'Chrome (LinkedIn)':
      return <LinkedInIcon style={{ color: '#0A66C2' }} />;
    case 'Excel':
      return <AssessmentIcon style={{ color: '#217346' }} />;
    case 'Zoom':
      return <VideoCallIcon style={{ color: '#2D8CFF' }} />;
    case 'Chrome (YouTube)':
      return <YouTubeIcon style={{ color: '#FF0000' }} />;
    case 'Outlook':
      return <MailIcon style={{ color: '#0078D4' }} />;
    case 'PowerPoint':
      return <InsertChartIcon style={{ color: '#D24726' }} />;
    case 'GitHub':
      return <GitHubIcon style={{ color: '#000000' }} />;
    case 'Trello':
      return <ViewListIcon style={{ color: '#0079BF' }} />;
    default:
      return null;
  }
};

const EmployeeActivityTable = () => {
  const [dateFilter, setDateFilter] = useState('Today');
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const data = [
    {
      app: 'Slack',
      openTime: '08:00:00',
      closeTime: '08:30:00',
      typingActivity: 'No',
      active:'Active Time',
      duration: 30,
      activity: 80,
      productive: 'Yes',
    },
    {
      app: 'Gmail',
      openTime: '08:35:00',
      closeTime: '08:50:00',
      typingActivity: 'Yes',
      duration: 15,
      active:'Active Time',
      activity: 70,
      productive: 'Yes',
    },
    {
      app: 'Visual Studio Code',
      openTime: '08:55:00',
      closeTime: '10:00:00',
      typingActivity: 'Yes',
      duration: 65,
      active:'Last Active',
      activity: 90,
      productive: 'Yes',
    },
    {
      app: 'JIRA',
      openTime: '10:05:00',
      closeTime: '10:30:00',
      typingActivity: 'No',
      duration: 25,
      active:'Active Time',
      activity: 60,
      productive: 'Yes',
    },
    {
      app: 'Chrome (LinkedIn)',
      openTime: '10:35:00',
      closeTime: '11:00:00',
      typingActivity: 'No',
      duration: 25,
      active:'Last Active',
      activity: 30,
      productive: 'No',
    },
    {
      app: 'Excel',
      openTime: '11:05:00',
      closeTime: '12:00:00',
      typingActivity: 'Yes',
      duration: 55,
      active:'Active Time',
      activity: 85,
      productive: 'Yes',
    },
    {
      app: 'Zoom',
      openTime: '12:30:00',
      closeTime: '13:00:00',
      typingActivity: 'Yes',
      duration: 30,
      active:'Active Time',
      activity: 75,
      productive: 'Yes',
    },
    {
      app: 'Chrome (YouTube)',
      openTime: '13:05:00',
      closeTime: '13:30:00',
      typingActivity: 'No',
      duration: 25,
      activity: 20,
      active:'Last Active',
      productive: 'No',
    },
    {
      app: 'Outlook',
      openTime: '13:35:00',
      closeTime: '14:00:00',
      typingActivity: 'Yes',
      duration: 25,
      activity: 65,
      active:'Last Active',
      productive: 'Yes',
    },
    {
      app: 'PowerPoint',
      openTime: '14:05:00',
      closeTime: '15:00:00',
      typingActivity: 'Yes',
      duration: 55,
      activity: 80,
      active:'Last Active',
      productive: 'Yes',
    },
    {
      app: 'GitHub',
      openTime: '15:05:00',
      closeTime: '15:30:00',
      typingActivity: 'Yes',
      duration: 25,
      activity: 70,
      active:'Active Time',
      productive: 'Yes',
    },
    {
      app: 'Trello',
      openTime: '15:35:00',
      closeTime: '16:00:00',
      typingActivity: 'No',
      duration: 25,
      activity: 60,
      active:'Active Time',
      productive: 'Yes',
    },
  ];

  return (
    <Box className="p-1 w-auto">
      <Box className="flex justify-end mb-4">
        <FormControl variant="outlined" className="mr-1">
          <InputLabel>Date Filter</InputLabel>
          <Select
            value={dateFilter}
            onChange={handleDateFilterChange}
            label="Date Filter"
          >
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="Yesterday">Yesterday</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
            <MenuItem value="Custom">Custom</MenuItem>
          </Select>
        </FormControl>
        {dateFilter === 'Custom' && (
          <>
            <TextField
              label="From"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              className="mr-4"
            />
            <TextField
              label="To"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              className="mr-2"
            />
          </>
        )}
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow className='h-2'>
              <TableCell>App/Website</TableCell>
              <TableCell>Open Time</TableCell>
              <TableCell>Close Time</TableCell>
              <TableCell>Typing Activity</TableCell>
              <TableCell>Duration (min)</TableCell>
              <TableCell>Activity (%)</TableCell>
              <TableCell>Productive</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box className="flex items-center">
                    {getIcon(row.app)}
                    <span className="ml-2">{row.app}</span>
                  </Box>
                </TableCell>
                <TableCell>{row.openTime}</TableCell>
                <TableCell>{row.closeTime}</TableCell>
                <TableCell>{row.typingActivity}</TableCell>
                <TableCell>
                  <Box className="text-sm">
                    <span>{row.active}</span>
                    <br />
                    <span className="text-xs">{row.duration} minutes</span>
                  </Box>
                </TableCell>
                <TableCell>
                  <div className="circular-progress">
                    <svg className="progress-ring" viewBox="0 0 40 40">
                      <circle
                        strokeWidth="4"
                        strokeDasharray={`${row.activity}, 100`}
                        fill="transparent"
                        r="16"
                        cx="20"
                        cy="20"
                        className="progress-ring__circle"
                      />
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="progress-ring__text"
                      >
                        {row.activity}%
                      </text>
                    </svg>
                  </div>
                </TableCell>
                <TableCell>{row.productive}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default EmployeeActivityTable;
