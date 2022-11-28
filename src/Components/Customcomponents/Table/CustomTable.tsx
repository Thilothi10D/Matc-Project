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
import { modalopen, hrmodalopen } from '../../../Store/ModalReducer';
import { AppState } from '../../../Store/Index';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function CustomTable(props: any) {
  const data = props.users;
  const handleDelete = props.handleDelete;
  const sdata = props.strng;
  const navigate = useNavigate();
  const modal = useSelector((state: AppState) => state.modal); // see store.ts
  const dispatch = useDispatch();

  const handleView = (row: any) => {
    navigate('/view', { state: { row } });
  }

  const handleEdit = (row: any) => {
    navigate('/edituser', { state: { row: row, name: sdata } })
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {data.length > 0 && (
          <><TableHead>
            <TableRow>
              <TableCell align="center"> ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">PROJECT</TableCell>
              <TableCell align="center">TEAM</TableCell>
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
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.projectname}</TableCell>
                  <TableCell align="center">{row.teamname}</TableCell>
                  <TableCell align="center"><VisibilityIcon style={{ cursor: 'pointer' }} onClick={() => { handleView(row) }} /></TableCell>
                  <TableCell align="center">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                      <EditIcon style={{ cursor: 'pointer' }} onClick={() => { handleEdit(row) }} />
                      <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => {
                        handleDelete(row.id);
                        sdata == 'hrdata' ? dispatch(hrmodalopen(true)) : dispatch(modalopen(true))
                      }} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody></>
        )}
        {data.length === 0 && (<div style={{ textAlign: 'center', width: '100%', height: 300, marginTop: 100 }}>NO DATA FOUND</div>)}
      </Table>
    </TableContainer>
  );
}