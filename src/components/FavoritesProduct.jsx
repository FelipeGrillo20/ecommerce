import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartThunk, cartCheckoutThunk } from '../store/slices/favorites.slice';

const FavoritesProduct = ({ show, handleClose}) => {

    const dispatch = useDispatch()

    const token = localStorage.getItem("token")

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        
        if(token) dispatch(getCartThunk())

    }, [ token ]);

    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Productos agregados</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
                {
                    cart?.map(item => (
                        <li key={item.id} style={{border:"1px solid black", marginBottom:"1rem" }}>
        
                                <h5>{item.product?.title}</h5>
                                <img style={{width:80, objectFit:"contain"}} src={item.product.images[0].url} alt=''/>
                                
                        </li>
                    ))      
                }
            </ul>

            <Button onClick={()=>dispatch(cartCheckoutThunk())}>Completar compra</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default FavoritesProduct;