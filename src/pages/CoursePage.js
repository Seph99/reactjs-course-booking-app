// import CourseCard from '../components/CourseCard';
// import coursesData from '../mockData/coursesData';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';





export default function CoursePage() {
	// //check if mock data was captured
	// console.log(coursesData);
	// // PHP Laravel
	// console.log(coursesData[0]);

	// // For us to be able to display all the courses from the data, we are going to use map() method
	// const courses = coursesData.map(individualCourse => {
	// 	return(
	// 		<CourseCard key={individualCourse.id} courseProp = {individualCourse}/>
	// 		// add id to avoid duplication and keep track of number of courses
	// 		)

	// }) 

	const [ allCourses, setAllCourses ] = useState([])

	const fetchData = () => {

		fetch('http://localhost:4000/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			// storing all the data to our useState allCourses
			setAllCourses(data)

		})

	}

	useEffect(() => {
		fetchData()
	},[])

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Courses</h1>
			{/*{ courses }	*/}

			{(user.isAdmin === true) ?

				<AdminView coursesData={allCourses} fetchData={fetchData}/>

				:

				<UserView coursesData={allCourses} />

			}


		</>

		)
}