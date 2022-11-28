import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/adduser')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        <Button variant="contained" color="success" onClick={()=>{handleClick()}}>
      
        Add Employee
      </Button>
     
      </Container>
    </React.Fragment>
  );
}
