import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';


export default function Logout() {

	// // to delete the items in the local storage.
	// localStorage.clear();

	const { unsetUser, setUser } = useContext(UserContext);

	// Clear the localStorage of the user's info
	unsetUser();

	// Set the user state back to it's original value
	useEffect(() => {
		setUser({
			// email: null
			accessToken: null
		})
	},[])


	return(

		<Navigate to="/" />
		)
}