import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function DashNavbar() {

    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">Web Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li>
                                <Link to="/" className="nav-itms">Request</Link>
                            </li>

                            <li>
                                <Link to="/dashboard" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/myposts" className="nav-itms">MyPosts</Link>
                            </li>

                            <li>
                                <Link to="/" onClick={logout} className="nav-itms" style={{ fontWeight:"600"}}>Logout</Link>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default DashNavbar;