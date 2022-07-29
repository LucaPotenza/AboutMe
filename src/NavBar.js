import { Navbar , Container , Offcanvas , Nav , NavDropdown , Form , FormControl , Button} from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-scroll';

function NavBar(){

    return(
    <Navbar fixed="top" bg="dark" variant="dark" expand='sm' className="boxShadow">
        <Container fluid>
            <Navbar.Brand href="#">Luca Potenza</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse placement="start">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link 
                            activeClass="active" 
                            className='link' 
                            to="Home" 
                            containerId="container" 
                            spy={true} 
                            hashSpy={true} 
                            offset={-100} 
                            smooth={true}
                            duration={500} >
                                Home
                        </Link>
                        <Link 
                            activeClass="active" 
                            className='link' 
                            to="Portfolio" 
                            containerId="container" 
                            spy={true} 
                            offset={-100} 
                            smooth={true} 
                            duration={500}>
                                Portfolio
                        </Link>
                        <Link 
                            activeClass="active" 
                            className='link' 
                            to="End" 
                            containerId="container" 
                            spy={true} 
                            smooth={true} 
                            duration={500}>
                                Skills
                        </Link>
                        <Link 
                            activeClass="active" 
                            className='link' 
                            to="End" 
                            containerId="container" 
                            spy={true} 
                            smooth={true} 
                            duration={500}>
                                Info
                        </Link>
                        <Link 
                            activeClass="active" 
                            className='link' 
                            to="End" 
                            containerId="container" 
                            spy={true} 
                            smooth={true} 
                            duration={500}>
                                Contatti
                        </Link>
                    </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;