import * as React from 'react';
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

function createData(
    id: number,
  name: string,
  contact: number,
  mail: string,
  role: string,
) {
  return { id,name, contact, mail, role };
}

const rows = [
  createData(1, 'aaaa', 9876543210, 'aaa@gmail.com', 'hr'),
  createData(2, 'bbbb', 9876543210, 'aaa@gmail.com', 'employe1'),
  createData(3, 'cccc', 9876543210, 'aaa@gmail.com', 'employe2'),
  createData(4, 'dddd', 9876543210, 'aaa@gmail.com', 'employe3'),
  createData(5, 'eeee', 9876543210, 'aaa@gmail.com', 'employe4'),
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Employee ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">View Details</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.mail}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center"><MoreHorizIcon/></TableCell>
              <TableCell align="center">
              <div>
              <EditIcon/><DeleteIcon/>
              </div>
              </TableCell>
              {/* <TableCell align="center"><DeleteIcon/></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}