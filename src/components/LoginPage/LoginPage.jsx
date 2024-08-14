import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
    IconButton,
  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
     const navigate = useNavigate();
     const handleBackClick = () =>{
        navigate(-1);
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
            width: '100%',
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
          <CardContent style={{ width: '100%' }}>
            {/* Back Button */}
            <IconButton style={{ marginBottom: '20px' }} onClick={handleBackClick}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" align="left" gutterBottom>
              Welcome Back!
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Login to your account
            </Typography>

            <TextField
              label="Email ID"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <ArrowBackIcon /> {/* Replace with an eye icon for showing/hiding password */}
                  </IconButton>
                ),
              }}
            />
            <Grid container justifyContent="space-between">
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
              <Link href="#" variant="body2">
                Reset Password
              </Link>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ margin: '20px 0', backgroundColor: '#0F67B1' }}
            >
              Login
            </Button>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <Link href="#" variant="body2" style={{ color: "primary" }}>
                Sign up for Free
              </Link>
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  )
}
