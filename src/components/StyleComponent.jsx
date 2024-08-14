import styled from "@emotion/styled";
import  PersonIcon from "@mui/icons-material/Person"
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import BallotIcon from '@mui/icons-material/Ballot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from "@mui/material/Tooltip";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

 

const drawerWidth = 240;

export const PortalLogo = styled(Typography)(() => ({
    color: '#fff',
    marginLeft: 30,
    fontWeight: 'bold'

}))

export const ListItemStyle = styled(ListItemButton)(() => ({
    borderRadius: '8px',
    '&:hover':{
        backgroundColor: "#F49600",
        borderRadius: '8px',
        color: 'white',
        '& svg':{
            color: 'white'
        },
    }
}))

export const IconAndTextStyle = styled(ListItemIcon)(() => ({
        minWidth: 0,
        justifyContent: 'center',
        marginRight: 10
}))

export const CollegeIconStyle = styled(SchoolIcon)(() => ({
    color:'#F49600',
    width: 50,
    height: 50,
    marginLeft: 50,
    marginTop: 20,

})) 

export const HomeIconStyle = styled(CalendarMonthSharpIcon)(() => ({
    color: "#F49600",
}))

export const PersonIconStyle = styled(PersonIcon)(() => ({
    color: "#F49600"
}))

export const EventIconStyle = styled(MenuBookIcon)(() => ({
    color: "#F49600"
}))

export const SemesterMarkStyle = styled(BallotIcon)(() => ({
    color: "#F49600"
}))

export const ListItemTextStyle = styled(ListItemText)(() => ({
    color: "white",
    marginRight: 40,
}))


export const HeadingText = styled(Typography)(() => ({
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
}))

export const Drawer = styled(MuiDrawer)(
    () => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
    }),
  );

export const AppBarStyle = styled(AppBar)(() => ({
    backgroundColor: "#fff",
    height: 90,
    display: 'flex',
}))

export const StyledList = styled(List)(() => ({
  marginTop: 10,
  color: "#1A3636"
}));

export const IconStyleList = styled(Box)(() => ({
    position: 'absolute',
    right: 0
}))

export const ProfileLoginName = styled(Typography)(() => ({
    color: '#000000',
    fontWeight: 'bold'
}))

export const ProfileUserIcon = styled(AccountCircleIcon)(() => ({
    color: '#000000',
    marginRight: 5
})) 

export const NavbarProfile = styled(Tooltip)(() => ({
        display: 'flex',
        justifyContent: 'space-between',
}))

export const FormControlStyle = styled(FormControl)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Make sure it takes full width
    maxWidth: '400px', // Optional: Set a max width
  }));


export const LogoutStyle = styled(MenuItem)(() => ({
    '&:hover':{
        backgroundColor: '#F5F6F7',
        borderRadius: '8px',
        color: '#D91313',
        '& svg':{
            color: '#D91313'
        },
    }
}))

export const MenuStyle = styled(Menu)(() => ({
    borderRadius: '8px'
}))

export const TitleStyle = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: '#1976d2', // Change this to your preferred color
    padding: '20px 0',
    letterSpacing: '2px',
    textTransform: 'uppercase'
}))

export const StyleDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}))