import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function EditUser() {

    const initialValues = {
        name: '',
        mobile: '',
        email: '',
        teamname: '',
        projectname: '',
        qualification: '',
        experience: '',
        address: '',
        dob: ''
    };

    const { state } = useLocation();
    const { row } = state;
    const [users, setUsers] = useState(initialValues);
    console.log('editpropss', state, row)
    const handleOnchange = (e: any) => {
        console.log('e---->', e.target.value)
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    const handleEditUser = () => {
        console.log('handleAddUser-->', users)
        axios.put('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/', users)
            .then(response => console.log('response', response))
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

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
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Name"
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="name"
                        value={row.name}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Email"
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="email"
                        value={row.email}
                        onChange={(e) => { handleOnchange(e) }}
                    />

                    <TextField
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
                        value={row.mobile}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Team ID"
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="teamname"
                        value={row.team_id}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Project ID "
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="projectname"
                        value={row.proj_id}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="dob"
                        type="date"
                        autoComplete="current-password"
                        variant="filled"
                        name="dob"
                        value={row.dob}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Project ID "
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="projectname"
                        value={row.qualification}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Project ID "
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="projectname"
                        value={row.experience}
                        onChange={(e) => { handleOnchange(e) }}
                    />
                    <TextField
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Project ID "
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="projectname"
                        value={row.address}
                        onChange={(e) => { handleOnchange(e) }}
                    />

                </Box>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={() => { handleEditUser() }}> UPDATE </Button>
                </div>
            </Container>
        </React.Fragment>

    );
}
