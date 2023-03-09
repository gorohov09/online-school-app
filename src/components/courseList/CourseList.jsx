import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6439ff",
    color: "white",
    fontSize: 20,
    fontFamily: 'Nunito',
    textAlign: 'center'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontFamily: 'Nunito',
    textAlign: 'center'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(title, description, rating, countStudents, countTasks, createDate, updateDate) {
  return { title, description, rating, countStudents, countTasks, createDate, updateDate };
}

const rows = [
  createData('Python-Start 1-ый год', 'Курс для новичков', 6.0, 24, 3, '12.12.20', '12.12.21'),
  createData('Python-Pro 1-ый год', 'Курс для подростков и тех, кто любит прогать', 6.0, 24, 5, '12.12.20', '12.12.21'),
  createData('Обществознание', 'Курс для общестоведов', 6.0, 24, 50, '12.12.20', '12.12.21'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Название курса</StyledTableCell>
            <StyledTableCell>Описание</StyledTableCell>
            <StyledTableCell>Рейтинг</StyledTableCell>
            <StyledTableCell align="right">Кол-во учеников</StyledTableCell>
            <StyledTableCell align="right">Кол-во заданий</StyledTableCell>
            <StyledTableCell align="right">Дата создания</StyledTableCell>
            <StyledTableCell align="right">Дата изменения</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.rating}</StyledTableCell>
              <StyledTableCell align="right">{row.countStudents}</StyledTableCell>
              <StyledTableCell align="right">{row.countTasks}</StyledTableCell>
              <StyledTableCell align="right">{row.createDate}</StyledTableCell>
              <StyledTableCell align="right">{row.updateDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}