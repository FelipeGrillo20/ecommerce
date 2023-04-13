import axios from 'axios'
import { useState, useEffect } from 'react'
import getConfig from '../utils/getConfig'
import Card from 'react-bootstrap/Card';


const Purchases = () => {

    const [purchases, setPurchases] = useState([])

    useEffect( () => {
        axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
        .then(resp => setPurchases(resp.data))
        .catch(error => console.log(error))
      }, [])
    

      return (
        <div>
            <h1>MIS COMPRAS</h1>
            {
                purchases.map( item => (
                    <Card style={{ width: '100%', display: "flex", flexDirection : "row" }} key={ item.id }>
                        <Card.Img variant="left" src={item.product.images[0].url} style={{width: 150}}/>
                        <Card.Body>
                            <Card.Title>{item.product.brand}</Card.Title>
                            <Card.Text>
                                {item.product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}


export default Purchases;