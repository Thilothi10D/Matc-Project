import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import InputField from "../Customcomponents/Inputs/Inputs";
import validation from "../Customcomponents/Validation/validation";
import { Field, Form, Formik } from 'formik';

export default function AddUser() {

    const initialValues = {
        name: '',
        mobile: '',
        email:'',
        teamname:'',
        projectname:'',
        qualification:'',
        experience:'',
        dob:'',
        address:''
    };
    
      const [users, setUsers] = useState(initialValues);

      const handleOnchange = (e:any) =>{
      console.log('e---->', e.target.value)
      setUsers({...users, [e.target.name]: e.target.value});
      }

      const handleAddUser = () => {
        console.log('handleAddUser-->')
        validation(users);
        axios.post('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/', users)
        .then(response => console.log('response', response))
        .catch(error => {
            console.error('There was an error!', error);
        });
      }
      console.log('adduser-->', users)


  return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Box component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off" >
               <TextField
                style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Name"
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="name"
                value={users.name}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="email"
                value={users.email}
                onChange={(e) => { handleOnchange(e) }}
            />

            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                label="Mobile"
                type="tel"
                inputProps={{
                    maxLength: 10,
                }}
                InputLabelProps={{ shrink: true }}
                autoComplete="current-password"
                variant="filled"
                name="mobile"
                value={users.mobile}
                onChange={(e) => { handleOnchange(e) }}
            />
           
           <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Team ID"
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="teamname"
                value={users.teamname}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Project ID "
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="projectname"
                value={users.projectname}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="dob"
                type="date"
                autoComplete="current-password"
                variant="filled"
                name="dob"
                value={users.dob}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Quaification"
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="qualification"
                value={users.qualification}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Experience "
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="experience"
                value={users.experience}
                onChange={(e) => { handleOnchange(e) }}
            />
            <TextField
            style={{ width: '100%' }}
                id="filled-password-input"
                InputLabelProps={{ shrink: true }}
                label="Address "
                type="text"
                autoComplete="current-password"
                variant="filled"
                name="address"
                value={users.address}
                onChange={(e) => { handleOnchange(e) }}
            />
           

        </Box>
        <div style={{ textAlign: 'center', margin: '15px 0px' }}>
            <Button variant="contained" onClick={() => { handleAddUser() }}> ADD </Button>
        </div>
    </Container>
</React.Fragment>
    
  );
}
