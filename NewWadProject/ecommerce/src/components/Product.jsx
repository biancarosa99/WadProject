import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom"
import AuthContext from '../context/AuthContext'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
   // background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;


`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height:350px;
    display: flex;
    align-items: center;
    justify content: center;
   // background-color: #fcf1ed;
   position: relative;

   &:hover ${Info}{
       opacity: 1;

   }


`

const Image = styled.img`
    height: 75%;
    z-index: 2;
    margin-left: 20px;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
     &:hover
    {
        background-color: #E6E6FA;
        transform: scale(1.1);
    }
    
`

const Product = ({item}) => {
    const history = useHistory();
    const { cart, customSetCart } = React.useContext(AuthContext);

    const handleAddProduct = (product) => {
        customSetCart([...cart, product]);
    };

    return (
        <Container>
            
            <Image src={item.img}/>
            <Info>
                <Icon onClick={() => handleAddProduct(item)}>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon onClick={() => history.push(`/product/${item._id}`)}>
                    {/* <Link to={`/product/${item._id}`}> */}
                    <SearchOutlined/>
                    {/* </Link> */}
                </Icon>
            </Info>

        </Container>
    )
}

export default Product;