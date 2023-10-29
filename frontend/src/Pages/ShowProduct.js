import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import NavBar from "../Components/NavBar/NavBar";
const ShowProduct = () =>{
    const [products,setProducts] = useState([])
    const getProduct = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/api/productview/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProduct();
    }, [])
    return(
        <div>
        <NavBar homepage />
        <div className="">
             
             <h1 className='title'>Show All Images</h1>
             <div class="cards">
             <div class="information">
        <div className='product-card-info'>
           
            {
                products.map((product,index) =>(
                    <Card className='m-2 rounded shadow-lg info'  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price} </Card.Text>
                      <Card.Text>{product.description} </Card.Text>
                      <Card.Text>{product.category} </Card.Text>
                      {/* <Button variant="primary">Show Detail</Button> */}
                    </Card.Body>
                  </Card>
                )   
                )
            }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ShowProduct;