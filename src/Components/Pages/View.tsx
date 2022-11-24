import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
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
  const { row } = state;
  console.log('view-->', row);
  const handleBack = () => {
    navigate('/employees')
  }

  useEffect(() => {
    async function getProjects() {
      console.log('id--->', row);
      try {
        const { data, status } = await axios.get(
          'https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/projects/' + row.proj_id,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        console.log('userss--->', data.proj_name)
        // setProject(data.proj_name);
        console.log('response status is: ', status);
        if (status === 200) {
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

    getProjects();
  }, [])
  console.log('namee', project)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h4" gutterBottom>
          Name:  {row.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h4" gutterBottom>
          Project Name : {project}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h4" gutterBottom>
          Team name : {row.team_id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h4" gutterBottom>
          Email: {row.email}
          <br />

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { handleBack() }}>Back</Button>
      </CardActions>
    </Card>
  );
}
