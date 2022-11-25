import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../Modals/Deletemodal';
import { useSelector, useDispatch } from "react-redux";
import { modalopen ,hrmodalopen} from '../../../Store/ModalReducer'; 
import {AppState} from '../../../Store/Index';

function createData(
    id: number,
  name: string,
  contact: number,
  mail: string,
  role: string,
) {
  return { id,name, contact, mail, role };
}


export default function CustomTable(props: any) {

  const data = props.users;
  const handleDelete = props.handleDelete;
  const sdata = props.strng;
  const navigate = useNavigate();
  const modal  = useSelector((state: AppState) => state.modal); // see store.ts
  const dispatch = useDispatch();

  const handleView = (row:any) =>{
    console.log('rowww-->',row.proj_id===0)
    navigate('/view', { state: { row} });
  }

  const handleEdit = (row:any) => {
    navigate('/edituser', {state: {row}})
  }
  console.log('modal', modal);
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {data.length > 0 ? (
          <><TableHead>
            <TableRow>
              <TableCell align="center"> ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">DOB</TableCell>
              <TableCell align="center">View Details</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead><TableBody>
              {modal && <DeleteModal />}
              {data.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell align="center">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.mobile}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center"><MoreHorizIcon style={{ cursor: 'pointer' }} onClick={() => { handleView(row) } } /></TableCell>
                  <TableCell align="center">
                    <div>
                      <EditIcon style={{ cursor: 'pointer' }} onClick={() => { handleEdit(row) } } /><DeleteIcon style={{ cursor: 'pointer' }} onClick={() => {
                        handleDelete(row.id);
                        sdata =='hrdata' ? dispatch(hrmodalopen(true)) : dispatch(modalopen(true)) 
                      } } />
                    </div>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody></>
        ) : (
          <div style={{textAlign:'center', width: '100%', height: 300, marginTop: 100}}>NO DATA FOUND</div>
        )}
      </Table>
    </TableContainer>
  );
}