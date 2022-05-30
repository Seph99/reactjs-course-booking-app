import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {

	/*
	Note for fetch()
		- it is a method in JS which allows to send request to an API and process its response.

	fetch('url', {optional object})
	-url from the API (http://localhost:4000/users/login)
	-if hosted, (https://heroku.com...)
	-{optional objects} - objects which contain additional info about our requests such as method, the body and the headers: content-type, authorization

	// getting a response is usually a 2-stage process
	.then(response => response.json()) ===> parse the response as json.
	.then(actualData => console.log(actualData) ) ====> process the result of the response


	*/


	const navigate = useNavigate();

	// consume the User Context object and its properties to use for user validation and to get email coming from the login

	const { user, setUser } = useContext(UserContext);


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// button
	const [isActive, setIsActive] = useState(true);


	useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	},[email,password])


	function authentication(e) {
		e.preventDefault();

		fetch('http://localhost:4000/users/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json()) // this is parsing stage
		.then(data => {
			console.log(data);

			if(data.accessToken !== undefined){
				localStorage.setItem('accessToken', data.accessToken);
				setUser({
					accessToken: data.accessToken
				})

				Swal.fire({
					title: 'Yay',
					icon: 'success',
					text: 'You are now logged in!'
				})

				// get user's details from our token
				fetch('http://localhost:4000/users/details', {
					headers: {
						Authorization: `Bearer ${data.accessToken}`
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)

					if(data.isAdmin === true){
						localStorage.setItem('isAdmin', data.isAdmin)
						
						setUser({
							isAdmin: data.isAdmin
						})

						// push to '/courses'
						navigate('/courses')
					} else {
						// if not an admin, push to '/' (homepage)
						navigate('/')
					}


				})



			} else {
				Swal.fire({
					title: 'Oops',
					icon: 'error',
					text: 'Something went wrong. Check your credentials.'
				})
			}

			setEmail('');
			setPassword('');

		})

		// // Set the email of the authenticated user in the local storage
		// // localStorage.setItem('propertyName',value)
		// // setItem to store info in local storage
		// localStorage.setItem('email', email);

		// // set the global user state to have properties obtained from the local storage.
		// setUser({
		// 	email: localStorage.getItem('email')
		// })


		// // clear inputs
		// setEmail('');
		// setPassword('');

		// Swal.fire({
		// 	title: 'Yay!',
		// 	icon: 'success',
		// 	text: `${email} has been verified! Welcome!`
		// })

	}


	return (

		// (user.email !== null) ?
		(user.accessToken !== null) ?

		<Navigate to="/courses" />

		:

		<Form onSubmit={e => authentication(e)}>
			<h1>Login</h1>
			<Form.Group>
				<Form.Label>Email Address</Form.Label>
				<Form.Control 
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
				    />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else
				</Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control 
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
				    />
			</Form.Group>

			{isActive ?
				<Button variant="primary" type="submit" className="mt-3">
					Submit
				</Button>
				:
				<Button variant="primary" type="submit" className="mt-3" disabled>
					Submit
				</Button>
			}
</Form>



		)


}