
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, CardContent, Typography, IconButton} from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import React from "react";

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
    </div>
  )
}

export default AHome;