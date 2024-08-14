import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import { StyledList, HomeIconStyle, PersonIconStyle, EventIconStyle, Drawer, ListItemTextStyle, CollegeIconStyle, PortalLogo,  IconAndTextStyle, ListItemStyle, SemesterMarkStyle} from '../StyleComponent';

// Main component
export default function SlideNav() {

  return (
    <>
    <NavBar />
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent"  sx={{
      '& .MuiDrawer-paper': {
        backgroundColor: '#161A1D',
      },
    }}>
      <CollegeIconStyle />
      <PortalLogo>TEC PORTAL</PortalLogo>
        <StyledList >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemStyle
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <IconAndTextStyle
              >
                <PersonIconStyle />
              </IconAndTextStyle>
              <ListItemTextStyle primary="Profile"/>
            </ListItemStyle>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemStyle
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
              color="inherit" component={Link} to="/internalMark">
              <IconAndTextStyle>
                <EventIconStyle />
              </IconAndTextStyle>
              <ListItemTextStyle primary="Internal Mark"/>
            </ListItemStyle>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemStyle
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <IconAndTextStyle
              >
                <SemesterMarkStyle />
              </IconAndTextStyle>
              <ListItemTextStyle primary="Semester Mark"/>
            </ListItemStyle>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemStyle
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <IconAndTextStyle>
                <HomeIconStyle />
              </IconAndTextStyle>
              <ListItemTextStyle primary="Leave Management"/>
            </ListItemStyle>
          </ListItem>
          </StyledList>
      </Drawer>
    </Box>
    </>
   
  );
}
