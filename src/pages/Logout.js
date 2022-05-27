import { Navigate } from 'react-router-dom';





export default function Logout() {

	// to delete the items in the local storage.
	localStorage.clear();

	return(

		<Navigate to="/" />


		)






}