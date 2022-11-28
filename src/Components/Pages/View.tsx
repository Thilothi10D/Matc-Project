import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';


export default function ViewCard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState('');
  const [team, setTeam] = useState('')
  const { row } = state;
  const handleBack = () => {
    navigate('/employees')
  }

  useEffect(() => {
    async function getProjects() {
      console.log('id--->', row);
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/projects/' + row.project_id,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        { status === 200 &&
          console.log('projectnamee', data.proj_name)
          setProject(data.proj_name);
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
      console.log('id--->', row);
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/teams/' + row.team_id,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        console.log('team--->', data.team_name)
        console.log('response status is: ', status);
        {status === 200 &&
          setTeam(data.team_name);
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
    getTeams();
    getProjects();
  }, [])

  console.log('projectteam--->', project, team)

  return (
    <>
      <Card sx={{ minWidth: 275 }} style={{textAlign:'center'}}>
      <CardContent style={{textAlign:'center'}}>
      <Typography sx={{ fontSize: 14 }}  color="black" gutterBottom>
          <h2>Person Details</h2>
        </Typography>
        <Typography sx={{ fontSize: 14 }}  variant="h4" gutterBottom>
          Name: {row.name}
        </Typography>
        {row.proj_id !== 0 && row.team_id !==0 ? (
          <>
          <Typography sx={{ fontSize: 14 }}  variant="h4" gutterBottom>
          Project Name: {project}
        </Typography>
        <Typography sx={{ fontSize: 14 }}  variant="h4" gutterBottom>
          Team name: {team}
        </Typography></>
        ) : (
          <Typography sx={{ fontSize: 14 }} variant="h4" gutterBottom>
          Role: {row.experience.toUpperCase()}
        </Typography>
        )}
        <Typography sx={{ fontSize: 14 }} variant="h4" gutterBottom>
          Email: {row.email}
          <br />

        </Typography>
        <Button size="small" onClick={() => { handleBack() } } style={{textAlign:'center'}}>Back</Button>
      </CardContent>
    </Card>
       
     </>
  );
}
