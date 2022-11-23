import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { admin, hr,employee } from "../../Store/LoginReducers";
import { AppState } from "../../Store/Index";

import axios from 'axios';
import Pages from '../Pages/Pages';
import EmployeeTable from '../Tables/EmployeeTable';
import About from '../About/About';
import Contact from '../Contact/Contact';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function MainDrawer() {
    type Employees = {
        id: number;
        email: string;
        name: string;
        dob: number;
        mobile: number;
        proj_id: number;
        team_id: number;
      };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<Employees[]>([]);
  const login  = useSelector((state: AppState) => state.loggin); 
  const [screen, setScreen] = React.useState<string>('');
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  React.useEffect(() => {
    async function getUsers() {
        try {
          // 👇️ const data: GetUsersResponse
          const { data, status } = await axios.get(
            'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users',
            {
              headers: {
                Accept: 'application/json',
              },
            },
          );
      
        console.log('userss',  data)
          // 👇️ "response status is: 200"
          console.log('response status is: ', status);
      if(status == 200) {
        setData(prevState => [...prevState, data])
        console.log('dataa-->', data)
      }
          
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
        }
      }
      
      getUsers();
  }, []);

  const handleCick = (screen:string) => {
    setScreen(screen)
    switch (screen) {
      case 'Dashboard':
        navigate('/dashboard');
        break
      case 'Employees':
        navigate('/employee')
        break
      case 'Hr':
        navigate('/hr')
        break
        case 'Contact':
          navigate('/contact')
          break
        case 'About Us':
          navigate('/about')
          break
        case 'Feedback & Concern':
          navigate('/feedback')
          break
      default:
        console.log(`Sorry, we are out of ${screen}.`);
    }
  }
  console.log('screen-->', screen);

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {screen ? screen : 'Dashboard'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('Dashboard')}}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItemButton>
            </ListItem>
           {login.name == 'admin' && <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('HR')}}>
                <ListItemIcon>
                  <ManageAccountsIcon/>
                </ListItemIcon>
                <ListItemText primary={'HR'} />
              </ListItemButton>
            </ListItem>}
            <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('Employees')}}>
                <ListItemIcon>
                  <GroupsIcon/>
                </ListItemIcon>
                <ListItemText primary={'Employees'} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('Contact')}}>
                <ListItemIcon>
                  <ContactsIcon/>
                </ListItemIcon>
                <ListItemText primary={'Contact'} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('About Us')}}>
                <ListItemIcon>
                  <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary={'About Us'} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton onClick={() => {handleCick('Feedback & Concern')}}>
                <ListItemIcon>
                  <FeedbackIcon/>
                </ListItemIcon>
                <ListItemText primary={'Feedback & Concern'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>
  );
}