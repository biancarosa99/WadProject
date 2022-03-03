import axios from "axios"
import { DataGrid } from '@material-ui/data-grid';
import React from 'react'
import {useEffect, useState} from "react"
//import { styled } from '@mui/material/styles';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {withStyles} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Edit } from "@material-ui/icons";
import {useHistory} from 'react-router-dom'


const DeleteButton = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    //display: flex;
    flex-wrap: wrap;
   // padding: 20px;
   margin-bottom: 50px;
   

`
const AddButton = styled.button`
    //margin-bottom: 50px;
    //flex: 1;
    //margin-left: 100px;
    border: none;
    padding: 10px;
    border-radius: 5%;
    background-color:#6f2da8;
    color: white;
    cursor: pointer;
    justify-content: center;
    margin-left: 10px;
    border-radius: 12px;
    &:hover{
        // background-color: #b19cd9;
        background-color: #7D4BB1;
    }
`
const theme = createTheme({
    palette: {
      background: {
        paper: 'red',
      }
    }
});

const StyledTableCell = withStyles((theme) => ({ 
    head: { 
        backgroundColor: "#efdbff", 
        color: theme.palette.common.black, 
    }, 
    body: 
    { 
        fontSize: 14, 
    },}))(TableCell); 
const StyledTableRow = withStyles((theme) => ({
     root: {
          "&:nth-of-type(even)": { 
               backgroundColor: "#f9f0ff", 
            // backgroundColor: '#ebd7fa';
            }, },}))(TableRow); 

const useStyles = makeStyles({ table: { minWidth: 700},});



const AdminProducts = () => {
    const history = useHistory();
    const classes = useStyles();
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
    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:5000/api/products/${id}`);
    };
   
    
      
      
     // const userList = users.map(user => <h6 user={user} key={user.id}>User ID: {user._id}. User username: {user.username}</h6>)

    return (
        <div>
            <h1 style={{justifyContent: 'center'}}>
                List of pruducts 
               
            </h1>
            {/* <div style={{justifyContent: 'center', display: 'flex'}}> */}
            <Top>
                <Link to="./AdminHomePage">
                    <AddButton>
                        Go to AdminHomePage
                    </AddButton>
                </Link>
                <Link to="./AddProduct">
                    <AddButton>
                        Add New Product
                    </AddButton>
                </Link>
                <Link to="./AdminUsers">
                    <AddButton>
                        Go to users
                    </AddButton>
                </Link>
                </Top>
                
           
            {/* </div> */}
           {/* {users.map(user =>{
               return <p>{user._id}-------{user.name} </p>
           })} */}
            <TableContainer component={Paper}>
                 <Table className={classes.table} aria-label="customized table"> 
                 <TableHead> 
                     <TableRow> 
                         <StyledTableCell>Product ID</StyledTableCell> 
                         <StyledTableCell align="center">Product Name</StyledTableCell>
                         <StyledTableCell align="center">Product Type</StyledTableCell>
                         <StyledTableCell align="center">Product Price</StyledTableCell> 
                         <StyledTableCell align="center">Product Quantity</StyledTableCell> 
                         <StyledTableCell align="center">Actions</StyledTableCell>
                         </TableRow> 
                  </TableHead> 
                  <TableBody> 
                      {products && products.map(product =>{
                            return (
                                <StyledTableRow  key={product.id}> 
                                <StyledTableCell component="th" scope="row">{product._id}</StyledTableCell> 
                                <StyledTableCell align="center"> {product.title}</StyledTableCell>
                                <StyledTableCell align="center"> {product.categories}</StyledTableCell>
                                <StyledTableCell align="center"> {product.price} $</StyledTableCell>
                                <StyledTableCell align="center"> {product.quantity}</StyledTableCell>  
                                <StyledTableCell align="center"> 
                                    <DeleteButton onClick={() => deleteProduct(product._id)}>
                                        <DeleteIcon style={{cursor: 'pointer'}}/>
                                    </DeleteButton>
                                    <DeleteButton onClick={() => history.push(`/admin/edit/${product._id}`)}>
                                        <EditIcon style={{cursor: 'pointer'}}/>
                                    </DeleteButton>
                                    
                                    
                                </StyledTableCell>
                                </StyledTableRow> 
                            )
                        })}
                      
                      
                      
                    </TableBody> 
                    </Table> 
                </TableContainer>
        </div>
    );
};

export default AdminProducts;

// import React from 'react'
// import axios from "axios"
// import {useEffect, useState} from "react"

// const AdminProducts = () => {
//     const [products, setProducts] = useState([]);

//     useEffect( () => {
//         const getProducts = async () =>{
//             try{
//                 const res = await axios.get("http://localhost:5000/api/products");
//                 setProducts(res.data);

//             }catch(err){
//                 console.log(err);
//             }
//         };
//         getProducts();
//     });
//    // const productList =  products.map(product => < AdminProduct product={product} key={product.id}/>);
//    const productList = products.map(product => <h6 product={product} key={product.id}> NEW Product ID: {product.id}. Product Title: {product.title}. ProductPrice: {product.price} $</h6>)
//     return (
//         <div>
//             {
//                 productList
//             }
//         </div>
//     );
// };

// export default AdminProducts;
