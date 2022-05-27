
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
import { Container } from 'react-bootstrap';

// react-router
// BrowserRouter as Router(alternative)
// BrowserRouter will serve as parent element instead of React fragment
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// <>...</> (Fragment) needed to be added if there are multiple components/HTML tags
function App() {

  return (
    <BrowserRouter>
        <AppNavbar />
        <Container>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/courses" element={ <CoursePage /> }/>
                <Route path="/register" element={ <Register /> }/>
                <Route path="/login" element={ <Login /> }/>
                <Route path="/logout" element={ <Logout /> }/>
            </Routes>       
      </Container>
    </BrowserRouter>
  );
}

export default App;
