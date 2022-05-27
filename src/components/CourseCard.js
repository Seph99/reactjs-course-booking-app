import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


// {} to destructure instead of using 'props'.
// courseProp is actually passed as an object from the parent component so we have to destructure
export default function CourseCard({courseProp}) {
	// checks if the data was successfully passed
	// console.log(props)

	// Deconstruct the course  properties into their own variables
	const { name, description, price} = courseProp;

	// Use state hook for this component to be able to store its value
	// states are used to keep track of info related to individual components

	// Syntax:
		// const [currentValue(getter), updatedValue(setter)] = useState(initialGetterValue)

		const [count, setCount] = useState(0);

		// set the available seats for enrollees
		const[ seat, setSeat ] = useState(30);

		// for the enable/disable of enroll button
		const[isOpen, setIsOpen] = useState(true);

		useEffect(() => {
			if(seat === 0) {
				setIsOpen(false)
			}
		}, [seat])

		function enroll() {
				setCount(count + 1);
				console.log('Enrollees: ' + count);
				setSeat(seat - 1);
				console.log('seats available ' + seat);	
		}


	return(
		<Card className="mt-3">
			<Card.Body>
				<Card.Title>{ name }</Card.Title>

				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>{ description }</Card.Text>

				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>Php { price }</Card.Text>

				<Card.Text>Enrollees: { count }</Card.Text>
				<Card.Text>Seats: { seat }</Card.Text>

				{ isOpen ? 
					<Button variant="primary" onClick={enroll}>Enroll</Button>

					:

					<Button variant="primary" onClick={enroll} disabled>Enroll</Button>
				}

			</Card.Body>
		</Card>
		)
}



// Check if the course card component is getting the correct prop types
// PropTypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct info is passed from one component to another

CourseCard.propTypes = {
	// shape method is used to check if a prop object has the same specific shape of data types.
	courseProp: PropTypes.shape({
		// Define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired

	})
}








