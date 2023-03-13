import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseService from '../../services/CourseService';
import Spinner from '../spinner/Spinner';


import './courseList.scss';

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

export default function CustomizedTables() {

	const [data, setData] = useState(null);
  	const [loading, setLoading] = useState(true);

  	const courseService = new CourseService();

	useEffect(() => {
		courseService.getTeacherCourses()
				.then(data => setData(data))
				.then(setLoading(false));
	}, []);

	const renderItems = (data) => {
		return data.courses.map((course) => (
			<StyledTableRow key={course.name}>
				<StyledTableCell component="th" scope="row">
					<Link className='link' to = {`${course.courseId}`}>{course.name}</Link>
				</StyledTableCell>
				<StyledTableCell align="right">{course.description}</StyledTableCell>
				<StyledTableCell align="right">{course.countStudents}</StyledTableCell>
				<StyledTableCell align="right">{course.countModules}</StyledTableCell>
				<StyledTableCell align="right">{course.countLessons}</StyledTableCell>
				<StyledTableCell align="right">{course.countTasks}</StyledTableCell>
				<StyledTableCell align="right">{course.create.substring(0, course.create.indexOf('T'))}</StyledTableCell>
				<StyledTableCell align="right">{course.update.substring(0, course.update.indexOf('T'))}</StyledTableCell>
			</StyledTableRow>
		))
	};

	let items;
	if (data !== null){
		items = renderItems(data);
	}


  	return (
		!loading ?
		<>
			<TableContainer component={Paper}>
      			<Table sx={{ minWidth: 700 }} aria-label="customized table">
        		<TableHead>
          		<TableRow>
            		<StyledTableCell>Название курса</StyledTableCell>
            		<StyledTableCell>Описание</StyledTableCell>
            		<StyledTableCell>Кол-во учеников</StyledTableCell>
            		<StyledTableCell align="right">Кол-во модулей</StyledTableCell>
            		<StyledTableCell align="right">Кол-во уроков</StyledTableCell>
            		<StyledTableCell align="right">Кол-во заданий</StyledTableCell>
            		<StyledTableCell align="right">Дата создания</StyledTableCell>
            		<StyledTableCell align="right">Дата изменения</StyledTableCell>
          		</TableRow>
        		</TableHead>
        		<TableBody>
					{
						items
					}
        		</TableBody>
      		</Table>
    		</TableContainer>
		</>
		:
		<>
		  	<Spinner />
		</>

  );
}