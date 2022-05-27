import CourseCard from '../components/CourseCard';
import coursesData from '../mockData/coursesData';





export default function() {
	//check if mock data was captured
	console.log(coursesData);
	// PHP Laravel
	console.log(coursesData[0]);

	// For us to be able to display all the courses from the data, we are going to use map() method
	const courses = coursesData.map(individualCourse => {
		return(
			<CourseCard key={individualCourse.id} courseProp = {individualCourse}/>
			// add id to avoid duplication and keep track of number of courses
			)

	}) 

	return(
		<>
			<h1>Courses</h1>
			{ courses }	
		</>

		)
}