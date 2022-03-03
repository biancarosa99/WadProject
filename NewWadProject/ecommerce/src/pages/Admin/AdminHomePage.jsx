import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from '../../components/Navbar';

// const Container = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 100px;

// `
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.businessoffashion.com/arc-prod-images/GBTY63KM6ZCTXPQXD3AHCSMYAY?auto=format%2Ccompress&crop=faces%2Centropy&fit=crop&max-h=512&w=1024") center;
  display: flex;
  align-items: center;
  justify-content: center;


`
const Top = styled.div`
    display: flex;
    align-items: center;
   // justify-content: space-between;
    padding: 20px;

`
const Button = styled.button`
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

const AdminHomePage = () => {
    return (
        <div>
            {/* <Navbar/> */}
        <Container>
            
            <Link to = "./AdminProducts">
                <Button>Products</Button>
            </Link>
            <Link to = "./AdminUsers">
            <Button>Users</Button>
            </Link>
            <Link to = "/">
                <Button>Return To Home Page</Button>
            </Link>
            {/* <Link to = "./NewTable">
            <Button>New Table</Button>
            </Link> */}
            
        </Container>
        </div>
    );
};

export default AdminHomePage;
