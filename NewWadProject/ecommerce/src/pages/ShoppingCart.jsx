import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"
import AuthContext from "../context/AuthContext"
import React from "react"



const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton = styled.button`
//     padding: 10px;
//    // font-weight: 600;
//     curssor: pointer;
//     background-color:  #E6E6FA;
//     color: black;
    padding: 10px;
    // font-weight: 600;
    curssor: pointer;
    background-color:  #6f2da8;
    color: white;
    margin: 20px;
    border: none;
    padding: 10px;
    //border-radius: 5%;
    border-radius: 12px;

    &:hover{
        // background-color: #b19cd9;
        background-color: #7D4BB1;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`


const ProductDetail = styled.div`
    flex: 2;
    display: flex;
` 

const Image = styled.img`
    width: 200px;
` 
const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
   // justify-content: space-around;
   justify-content: center;

` 
const ProductName = styled.span`` 
const ProductId = styled.span`` 
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    margin-top: 10px;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px; 
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h2`

` 
const SummaryItem = styled.div`
    margin: 30px 0px;
     display: flex;
     justify-content: space-between; 
     font-weight: ${props=>props.type === "total" && "500"};
     font-size: ${props=>props.type === "total" && "24px"};

    
` 
const SummaryItemText = styled.span`
    
` 
const SummaryItemPrice = styled.span`
    
` 
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #6f2da8;
    color: white;
   // font-weight: 600;
   border-radius: 12px;

    &:hover{
        // background-color: #b19cd9;
        background-color: #7D4BB1;
    }
` 
const Button = styled.button`
    margin-top: 30px;
    width: 40%;
    border: none;
    padding: 10px;
    // border-radius: 5%;
    border-radius: 12px;

    &:hover{
        // background-color: #b19cd9;
        background-color: #7D4BB1;
    }
    background-color:#6f2da8;
    color: white;
    cursor: pointer;
`

const ShoppingCart = () => {
    const {cart, customSetCart } = React.useContext(AuthContext);
    
    const removeItemFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        customSetCart(newCart);
    };

    const totalPrice = cart.reduce((accumulator, current) => accumulator + current.price, 0);
    const totalCount = cart.reduce((accumulator, current) => accumulator + current.coount, 0);
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                {/* <Title>
                    YOUR BAG
                </Title> */}
                <Top>
                    <Link to="./ProductsList">
                    <TopButton>
                        CONTINUE SHOPPING
                    </TopButton>
                    </Link>
                    
                    {/* <TopButton>
                        GO TO CHECKOUT
                    </TopButton> */}
                </Top>
                <Bottom>
                    <Info>
                        {cart.map((product, index) => {
                            return (
                            <Product>
                                <ProductDetail>
                                    <Image src = {product.img}/>
                                    <Details>
                                        <ProductName><b  >Product: </b>{product.title}</ProductName>
                                        <ProductId><b>{product.id}</b></ProductId>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <Button onClick={() => removeItemFromCart(index)}>Remove item</Button>
                                    <ProductPrice>$ {product.price}</ProductPrice>
                                </PriceDetail>
                                <Hr/>
                            </Product>
                        )})}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem type="total" >
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart
