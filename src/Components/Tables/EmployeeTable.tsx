import React, {useState} from 'react'
import CustomTable from '../Customcomponents/Table/CustomTable';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

interface Props {
  islogin:boolean
}
export default function EmployeeTable(props:Props) {

  type Employees = {
    id: number;
    email: string;
    name: string;
    dob: number;
    mobile: number;
    proj_id: number;
    team_id: number;
  };

  const [users, setUsers] = useState<Employees[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const {islogin} = props;
  console.log('login------->',islogin);

  const handleDelete = (id:number) => {
    console.log('iddd', id)
        axios.delete('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/' + id)
        .then(response => {
          console.log('Delete successful', response.status, response )
          const Usr = users.filter((u)=> u.id !==id) 
          if(response.status === 200){
            setIsOpen(true);
            setUsers(Usr);
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

  }

  const handleEdit = (id:number) => {
    console.log('iddd', id)
        axios.put('https://637cb99572f3ce38eaabb3a4.mockapi.io/hightechservice/users/' + id)
        .then(response => {
          console.log('Delete successful', response)
          const Usr = users.filter((u)=> u.id !==id) 
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
      
        console.log('userss--->',  data)
          console.log('response status is: ', status);
      if(status == 200) {
        const emps = data.filter((d:any)=> d.team_id !==0)
        console.log('empsss', emps)
        setUsers( emps);
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
  console.log('delmodal', isOpen);
  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <CustomTable users={users} handleDelete={handleDelete} strng='empdata'/>
      </Container>
    </React.Fragment>
    
   
        
    </>
  )
}
