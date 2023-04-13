import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createProductThunk } from '../store/slices/favorites.slice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const ProductDetail = () => {
    const { id } = useParams()
    const [ detail, setDetail ] = useState({})
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()

    

    useEffect( () => {
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp => setDetail(resp.data))
            .catch(error => console.log(error))
      }, [])

      const addProduct = () => {
        const data = {
            quantity: counter,
            productId: id
        }
        dispatch(createProductThunk(data))
      }

    return (

            
                <Container className='py-3'>
                    <Row>
                        <img src={detail.images?.[0].url} style={{height: 300, width: 300}} />
                        <h1>{detail.title}</h1>
                        <p>{detail.description}</p>
                        <p>Precio: {detail.price}</p>     
                    </Row>
                    <Row className="mb-3">
                    <Col>
                        <Button onClick={()=>setCounter (counter-1)}>-</Button>
                        {counter}
                        <Button onClick={()=>setCounter (counter+1)}>+</Button>
                    </Col>
                    <Col>
                        <Button onClick={addProduct}>Añadir a favoritos</Button>
                    </Col>
                    </Row>
                </Container>
    );
};

export default ProductDetail;