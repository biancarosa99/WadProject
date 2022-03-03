import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { useHistory } from "react-router-dom";


const Container = styled.div`
    height: 60px;
    background-color: #E6E6FA;
    
`

const Wrapper = styled.div`
    // padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px; 
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-top: 5px;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: normal;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
   
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    // const isAdmin = verifyTokenAndAdmin();
    const {user, setUser} = React.useContext(AuthContext);
    const {cart, customSetCart } = React.useContext(AuthContext);

    // const totalCount = cart.reduce((accumulator, current) => accumulator + current.count, 0);
    // const {setCart} = React.useContext(AuthContext);
    const history = useHistory();

    const LogoutUser = () => {
        setUser(null);
        // setCart(null);
        localStorage.clear();
        history.push("/");
      };
    return (
        <Container>
            <Wrapper>
                <Left>
                 {/* <Logo>HairCareBoutique</Logo> */}
                 <h1>HairCareBoutique</h1>
                </Left>
                <Center>
                {user && user.isAdmin ? ( <Link to="../pages/Admin/AdminHomePage" style={{ color: 'black'}}>
                    <MenuItem>ADMIN</MenuItem>
                </Link>) : ("")}
                </Center>
                <Right>
                 <Link to="../" style={{ color: 'black'}}>
                         <MenuItem>HOME</MenuItem>
                </Link>
                <>
                {user ? (<><MenuItem> Hello {user.username}</MenuItem> <MenuItem onClick = {LogoutUser}>LOG OUT </MenuItem>
</>) : (<>
                    <Link to="../pages/Register" style={{ color: 'black'}}>
                         <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="../pages/Login" style={{ color: 'black'}}>
                         <MenuItem>LOG IN</MenuItem>
                    </Link>
                </>)}
                </>
                    
                    {user ? ( <><MenuItem>
                       <Badge badgeContent={cart.length} color="primary">
                            <Link to ="../pages/ShoppingCart" style={{ color: 'black'}}>
                                < ShoppingCartOutlined/>
                            </Link>
                         
                      </Badge>
                    </MenuItem>
                    </>) :("")
                }
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
