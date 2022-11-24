import React, {useState} from 'react'
import CustomTable from '../Customcomponents/Table/CustomTable';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
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
  
  const {islogin} = props;
  const navigate = useNavigate();
  console.log('login------->',islogin);

  // const checkUser = () => {
  //   if(!islogin) {
  //     navigate('/')
  //   }
  // }
  React.useEffect(() => {
    // checkUser();
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
        setUsers( data);
        console.log('dataa-->', users)
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
  return (
    <>
    
    
    <CustomTable users={users}/>
        
    </>
  )
}
