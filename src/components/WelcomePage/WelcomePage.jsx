import React from 'react'
import { Grid, Paper, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import { TitleStyle ,  StyleDiv } from '../StyleComponent';



export default function WelcomePage() {

  const navigate = useNavigate();

  const handleClickLoginPage = () => {
    navigate('/Login');
  }

  const handleClickSignupPage = () => {
    navigate('/Signup');
  }

  return (
    <Grid
    container
    style={{
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f7',
    }}
  >
    <Card style={{ display: 'flex', maxWidth: '960px', width: '100%' }}>
      {/* Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundImage: `url(${require('../Images/college2.jpg')})`, // Adjust the image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
        }}
      >
        {/* Image content could be placed here if needed */}
      </Grid>

      {/* Form Section */}
      <Grid
        item
        xs={12}
        md={6}
        container
        alignItems="center"
        justifyContent="center"
        style={{ padding: '40px' }}
      >
        < StyleDiv>
          <TitleStyle variant="h4" 
            align="center">  
            TEC STUDENT PORTAL
          </TitleStyle>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Choose an option
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '20px 0', backgroundColor: '#0F67B1', width: 100 }}
            onClick={handleClickSignupPage}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            style={{
              borderColor: '#0F67B1',
              color: '#0F67B1',
              marginTop: '10px',
              width: 100 
            }}
            onClick={handleClickLoginPage}
          >
            Login
          </Button>
        </ StyleDiv>
      </Grid>
    </Card>
  </Grid>
  )
}
