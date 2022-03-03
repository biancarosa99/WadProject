import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AuthContext from "../context/AuthContext";
import React from "react";

const Container=styled.div`
`
const ImgContainer = styled.div`
    flex: 1;
    margin: 20px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify content: center;
   // position: relative;
`

const Image=styled.img`
    height: 100%;
    width: 100%;
   // position: absolute;
   object-fit: cover;

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
`
const ProductImgContainer = styled.div`
    flex: 1;
`

const ProductImg = styled.img`
    width: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    // display: flex;
    // flex-direction: column;
    // //justify-content: center;
    // align-items: center;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weigth: 100;
    font-size: 40px;
`
const AddContainer = styled.div`
    width: 50%;

`

const Button = styled.button`
    padding: 15px;
    border: none;
    background-color: #6f2da8;
    color: white;
    margin-top: 20px;
    font-weight: 100;
    border-radius: 12px;

    &:hover{
        // background-color: #b19cd9;
        background-color: #7D4BB1;
    }

`

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const {cart, customSetCart} = React.useContext(AuthContext); 
    
    const getProductById = async () => {
        try {
            const res = await axios.get(`/products/find/${id}`);
            setProduct(res.data);
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {

         getProductById();
    },[]);

    const handleAddProduct = (newProduct) => {
        customSetCart([...cart, newProduct]);
    };
    

    if(!product) return <h1>Loading...</h1>


    return (
        
        <Container>
           
            <Navbar/>
            {/* <CompleteRoutines/> */}
            <ImgContainer>
            <Image src ="https://lorealproshop.cz/uploads/blog/955/banner_955_1630966426_thumb@2600w.jpg"/>
            </ImgContainer>
            <Wrapper>
                <ProductImgContainer>
                    <ProductImg src={product.img}/>
                </ProductImgContainer>
                <InfoContainer>
                        <Title>
                            {product.title}
                        </Title>
                        <Desc>
                            {product.desc}
                        </Desc>
                        <Price>
                            {product.price}$
                        </Price>
                        <AddContainer>
                            <Button onClick={() => handleAddProduct(product)}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
            </Wrapper>
            <Footer/>
            
            
        </Container>
    )
};

export default SingleProduct;
