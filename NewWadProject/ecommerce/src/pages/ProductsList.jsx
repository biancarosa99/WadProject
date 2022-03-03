import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import styled from 'styled-components';

const Container = styled.div`
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

export const ProductsList = () => {
    return (
        <div>
            <Navbar/>
            <Container>
            <Image src ="https://lorealproshop.cz/uploads/blog/955/banner_955_1630966426_thumb@2600w.jpg"/>
            </Container>
            <Products/>
            <Footer/>
            
        </div>
    );
};

export default ProductsList;