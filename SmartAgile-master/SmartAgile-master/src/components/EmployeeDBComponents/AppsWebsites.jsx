import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material";
import { format } from "date-fns";
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
} from "@mui/icons-material";
import "./styles.css";
import { getCSRFToken } from "./csrf"; // Import the CSRF token utility

const getIcon = (app) => {
  switch (app) {
    case "Slack":
      return <ChatIcon style={{ color: "#4A154B" }} />;
    case "Gmail":
      return <MailIcon style={{ color: "#D93025" }} />;
    case "Visual Studio Code":
      return <CodeIcon style={{ color: "#007ACC" }} />;
    case "JIRA":
      return <WorkIcon style={{ color: "#0052CC" }} />;
    case "Chrome (LinkedIn)":
      return <LinkedInIcon style={{ color: "#0A66C2" }} />;
    case "Excel":
      return <AssessmentIcon style={{ color: "#217346" }} />;
    case "Zoom":
      return <VideoCallIcon style={{ color: "#2D8CFF" }} />;
    case "Chrome (YouTube)":
      return <YouTubeIcon style={{ color: "#FF0000" }} />;
    case "Outlook":
      return <MailIcon style={{ color: "#0078D4" }} />;
    case "PowerPoint":
      return <InsertChartIcon style={{ color: "#D24726" }} />;
    case "GitHub":
      return <GitHubIcon style={{ color: "#000000" }} />;
    case "Trello":
      return <ViewListIcon style={{ color: "#0079BF" }} />;
    default:
      return null;
  }
};

const EmployeeActivityTable = () => {
  const [dateFilter, setDateFilter] = useState("Today");
  const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User:", user);

    if (!user) {
      console.error("User not found in localStorage");
      return;
    }
    const formData = new FormData();
    formData.append("email", user.email);

    try {
      const csrfToken = getCSRFToken(); // Get CSRF token
      const response = await axios.post(
        `http://127.0.0.1:8000/api/appdata/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": csrfToken, // Include CSRF token in headers
          },
          withCredentials: true,
        }
      );
      console.log("Response:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const applyDateFilter = () => {
    fetchData();
  };

  if (loading) {
    return <CircularProgress />;
  }

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
        {dateFilter === "Custom" && (
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
        <Button variant="contained" color="primary" onClick={applyDateFilter}>
          Apply
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow className="h-2">
              <TableCell>App/Website</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Duration (min)</TableCell>
              <TableCell>Productive</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box className="flex items-center">
                    {getIcon(row.applicationname)}
                    <span className="ml-2">{row.applicationname}</span>
                  </Box>
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <Box className="text-sm">
                    <span>{row.duration} minutes</span>
                  </Box>
                </TableCell>
                <TableCell>
                  {row.category.toLowerCase() === "work" ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeActivityTable;
