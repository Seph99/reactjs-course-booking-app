import { useState } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
// Banner and Highlights are now inside Home
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SpecificCourse from './pages/SpecificCourse';
// import PageNotFound from './pages/PageNotFound'; // same as ErrorPage
import ErrorPage from './pages/ErrorPage';
import { Container } from 'react-bootstrap';
import { UserProvider } from './UserContext';


// react-router
// BrowserRouter as Router(alternative)
// BrowserRouter will serve as parent element instead of React fragment
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// <>...</> (Fragment) needed to be added if there are multiple components/HTML tags
function App() {

    // state hook fo the user state that defined here for global scope
    // This will be used to store user info and will be used for validating if a user is logged in on the app or not
    const [ user, setUser ] = useState({
        // email: localStorage.getItem('email')
        accessToken: localStorage.getItem('accessToken'),
        isAdmin: localStorage.getItem('isAdmin') === 'true'
    })

    // function for clearing localStorage on logout
    const unsetUser = () => {
        localStorage.clear();
    }


  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
        <BrowserRouter>
            <AppNavbar />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/courses" element={ <CoursePage /> }/>
                    <Route path="/register" element={ <Register /> }/>
                    <Route path="/login" element={ <Login /> }/>
                    <Route path="/logout" element={ <Logout /> }/>
                    <Route path="/courses/:courseId" element={ <SpecificCourse /> }/>
                    <Route path="*" element={ <ErrorPage /> }/>
                </Routes>       
          </Container>
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
