import { Link } from 'react-router-dom';

export default function PageNotFound() {

	return(

		<>
			<h4>Zuitt Booking</h4>
			<h1>Page Not Found</h1>
			<span>Go back to </span><Link to="/" className="text-decoration-none">homepage</Link>

		</>

		)
}