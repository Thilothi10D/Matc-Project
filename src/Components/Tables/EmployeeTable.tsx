import React, { useState } from 'react'
import CustomTable from '../Customcomponents/Table/CustomTable';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {  TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';


interface Props {
  islogin: boolean
}

export default function EmployeeTable(props: Props) {
  type Employees = {
    id: number;
    email: string;
    name: string;
    dob: number;
    mobile: number;
    projectname: number;
    teamname: number;

  };

  const [users, setUsers] = useState<Employees[]>([]);
  const [searchedUser, setSearchedUser] = useState<Employees[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { islogin } = props;
  console.log('login------->', islogin);


  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal: any) => {
    const filteredRows = users.filter((row) => {
      // console.log('filteredRows',row.name.toLowerCase(), searchedVal.toLowerCase(), row);
      if (row.name.toLowerCase() === searchedVal.toLowerCase()) {
        console.log('filteredRows', row)
        setSearchedUser([row]);
        // setUsers([row])
        return row
      } 
      // else  if (row.projectname.toLowerCase() === searchedVal.toLowerCase()) {
      //   setSearchedUser([row]);
      //   // setUsers([row])
      //   return row
      // }

      else if(searchedVal.length === 0) {
        console.log('elseeeeeeee')
        console.log('searchedUser',searchedUser)
        setUsers(searchedUser)
      }
      // return row
    });
  };

  console.log('searched',searched.length === 0 , searchedUser )
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const handleChange = (e:any) => {
    console.log('eeeeee--->',e)
    setSearched(e.target.value);
    requestSearch(searched)
  };

  const handleDelete = (id: number) => {
    console.log('iddd', id)
    axios.delete('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/' + id)
      .then(response => {
        console.log('Delete successful', response.status, response)
        const Usr = users.filter((u) => u.id !== id)
        if (response.status === 200) {
          setIsOpen(true);
          setUsers(Usr);
          setSearchedUser(Usr)
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  const handleEdit = (id: number) => {
    console.log('iddd', id)
    axios.put('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/' + id)
      .then(response => {
        console.log('Delete successful', response)
        const Usr = users.filter((u) => u.id !== id)
        setUsers(Usr);

      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  React.useEffect(() => {
    async function getUsers() {
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        console.log('userss--->', data)
        console.log('response status is: ', status);
        if (status == 200) {
          const emps = data.filter((d: any) => d.teamname !== 0)
          console.log('empsss', emps)
          setUsers(emps);
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
    async function getProjects() {
      // console.log('id--->', row);
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/projects',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        {
          status === 200 &&
          console.log('projectnamee', data.proj_name)
          // setProject(data.proj_name);
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
    async function getTeams() {
      // console.log('id--->', row);
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/teams',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        console.log('team--->', data.team_name)
        console.log('response status is: ', status);
        // {status === 200 &&
        //   setTeam(data.team_name);
        // }

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
    getTeams();
    getProjects();
    getUsers();
  }, [searchedUser]);

  console.log('delmodal', isOpen);

  return (
    <div>
      <CssBaseline />
      <Container style={{ maxWidth: '100%' }}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <TextField
                
                id="standard-bare"
                variant="outlined"
                value={searched}
                // onChange={(searchVal) => requestSearch(searchVal)}
                onChange = {(e:any)=>{handleChange(e)}}
                // defaultValue="Search"
                placeholder='Search'
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />

        <CustomTable users={users} handleDelete={handleDelete} strng='empdata' />
      </Container>
    </div>
  )
}
