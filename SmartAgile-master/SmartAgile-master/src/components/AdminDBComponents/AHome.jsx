import React from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
//import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const AHome = () => {
  return (
    <>
    <div className='flex flex-nowrap gap-x-3'>
        <div>
          <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                  Number of Employees
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <WorkOutlineIcon/>
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="body2">
                24
              </Typography>
            </Box>
            <Divider />
          </Card>
        </div>
        
    </div>
    </>
  );
};
export default AHome;