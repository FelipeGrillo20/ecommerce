import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FavoritesProduct from './FavoritesProduct';


const NavBar = () => {
    const [ show, setShow ] = useState(false)
    const navigate = useNavigate()

    const handleClose = () => {
        setShow(false)
    }

    const sideBarAction = () => {
        const token = localStorage.getItem("token")

        if(token){
            setShow(true)
        }else{
            navigate("/login")
        }
    }
    
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">ECOMMERCE</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
                <Nav.Link 
                onClick={ () => sideBarAction() }
                >Carrito</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <FavoritesProduct
        show={ show }
        handleClose={ handleClose}
        />
        </>
    );
}

export default NavBar;