import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
//import Products from '../components/Products';
//import ProductsList from './ProductsList';
import HairRoutines from '../components/HairRoutines';
import styled from 'styled-components';

import AdminProducts from './Admin/AdminProducts';
import AdminUsers from './Admin/AdminUsers';
import AdminHomePage from './Admin/AdminHomePage';
//import ShoppingCart from './ShoppingCart';
import SingleProduct from './SingleProduct';

const Title = styled.h2`
    margin-left: 40px;
   // font-weight: bold;
`

export const Home = () => {
    return (
        <div>
             <Navbar/>
            <Slider />
            <Title>HAIR CARE ROUTINES</Title>
    
            <HairRoutines/>
            <Footer/> 
            {/* <ShoppingCart/>
            {/* <SingleProduct/> */}
            {/* <AdminProducts/> */}
            {/* <AdminUsers/> */}
            {/* <AdminHomePage/> */}
            {/* <SingleProduct/> */}
        </div>
    );
};

export default Home;