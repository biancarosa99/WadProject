import React from 'react'
import styled from 'styled-components'
//import { products } from '../data'
import Product from './Product';
import axios from "axios"
import {useEffect, useState} from "react"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
`;

const ImgContainer = styled.img`
    height: 20%;
   


`

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const getProducts = async () =>{
            try{
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);

            }catch(err){
                console.log(err);
            }
        };
        getProducts();
    });

    return (
 
        <Container>
             {/* <ImgContainer src= "https://cdn11.bigcommerce.com/s-nrewoujwic/product_images/uploaded_images/newserieexpert-banner-range-1015x430px.jpg">
             </ImgContainer> */}
            {products.map(item=>(
                <Product item={item} key={item.id}/>
            ))}

        </Container>
    )
}

export default Products;