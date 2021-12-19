import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AdminNavbar() {


    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">Web Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li>
                                <Link to="/dashboard" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/addmanager" className="nav-itms"> Add Manager</Link>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AdminNavbar;