import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function EditUser() {
    const { state } = useLocation();
    const { row, name } = state;
    const initialValues = {
        name: row.name ? row.name : '',
        mobile: row.mobile ? row.mobile : '',
        email: row.email ? row.email : '',
        team_id: row.team_id ? row.team_id : '',
        project_id: row.project_id ? row.project_id : '',
        qualification: row.qualification ? row.qualification : '',
        experience: row.experience ? row.experience : '',
        address: row.address ? row.address : '',
        dob: row.dob ? row.dob : '',
    };
    const [users, setUsers] = useState(initialValues);

    console.log('editpropss', state, row);
console.log('name------>', name)
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('e---->', e.target.value)
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    const handleEditUser = () => {
        console.log('handleAddUser-->', 'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/'+ row.id , users)
        axios.put('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/'+ row.id , users)
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
                   { name === 'empdata' &&  <>
                   <TextField
                    style={{ width: '100%' }}
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Team ID"
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="team_id"
                        value={users.team_id}
                        onChange={(e) => { handleOnchange(e) }}
                        inputProps={
                            { readOnly: true, }
                        }
                    />
                    <TextField
                    style={{ width: '100%' }}
                        id="filled-password-input"
                        InputLabelProps={{ shrink: true }}
                        label="Project ID "
                        type="text"
                        autoComplete="current-password"
                        variant="filled"
                        name="project_id"
                        value={users.project_id}
                        onChange={(e) => { handleOnchange(e) }}
                        inputProps={
                            { readOnly: true, }
                        }
                    /></> }
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
                    <Button variant="contained" onClick={() => { handleEditUser() }}> UPDATE </Button>
                </div>
            </Container>
        </React.Fragment>

    );
}
