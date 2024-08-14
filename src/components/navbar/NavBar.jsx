import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import { HeadingText, AppBarStyle, IconStyleList, ProfileLoginName, ProfileUserIcon, NavbarProfile, LogoutStyle, MenuStyle  } from '../StyleComponent';

const settings = ['Logout'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarStyle  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <IconStyleList >
            <NavbarProfile>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ProfileUserIcon />
                <ProfileLoginName> Lakshmana Selvan V</ProfileLoginName>
              </IconButton>
            </NavbarProfile>
            </IconStyleList>
            <MenuStyle
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <LogoutStyle key={setting} onClick={handleCloseUserMenu}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  <Typography textAlign="center">{setting}</Typography>
                </LogoutStyle>
              ))}
            </MenuStyle>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyle >
  );
}
