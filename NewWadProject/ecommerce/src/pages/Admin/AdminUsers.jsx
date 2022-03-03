// import React from 'react'
// import axios from "axios"
// import {useEffect, useState} from "react"

// const AdminUsers = () => {
//     const [users, setUsers] = useState([]);

//     useEffect( () => {
//         const getUsers = async () =>{
//             try{
//                 const res = await axios.get("http://localhost:5000/api/users");
//                 setUsers(res.data);

//             }catch(err){
//                 console.log(err);
//             }
//         };
//         getUsers();
//     });
//    //const productList =  products.map(product => < AdminProduct product={product} key={product.id}/>);
//    const userList = users.map(user => <h6 user={user} key={user.id}>User ID: {user._id}. User username: {user.username}</h6>)
//     return (
//         <div>
//             {
//                 userList
//             }
//         </div>
//     );
        
// };

// export default AdminUsers;

//import React from 'react'
import axios from "axios"
import { DataGrid } from '@material-ui/data-grid';
import React from 'react'
import {useEffect, useState} from "react"
//import { styled } from '@mui/material/styles';
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
import  styled  from "styled-components";

const Button = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
`

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
            }, },}))(TableRow); 
const useStyles = makeStyles({ table: { minWidth: 700, },});


const AdminUsers = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect( () => {
        const getUsers = async () =>{
            try{
                const res = await axios.get("http://localhost:5000/api/users");
                setUsers(res.data);

            }catch(err){
                console.log(err);
            }
        };
        getUsers();
    });

    const deleteUser = (id) =>{
        axios.delete(`http://localhost:5000/api/users/${id}`);
    };
   
    
      
      
     // const userList = users.map(user => <h6 user={user} key={user.id}>User ID: {user._id}. User username: {user.username}</h6>)

    return (
        <div>
            <h1 style={{justifyContent: 'center'}}>List of users</h1>
           {/* {users.map(user =>{
               return <p>{user._id}-------{user.name} </p>
           })} */}
            <TableContainer component={Paper}>
                 <Table className={classes.table} aria-label="customized table"> 
                 <TableHead> 
                     <TableRow> 
                         <StyledTableCell>User ID</StyledTableCell> 
                         <StyledTableCell align="center">Username</StyledTableCell>
                         <StyledTableCell align="center">User First Name</StyledTableCell> 
                         <StyledTableCell align="center">User Last Name</StyledTableCell>
                         <StyledTableCell align="center">Actions</StyledTableCell>
                         </TableRow> 
                  </TableHead> 
                  <TableBody> 
                      {users.map(user =>{
                            return (
                                <StyledTableRow key={user.id}> 
                                <StyledTableCell component="th" scope="row">{user._id}</StyledTableCell> 
                                <StyledTableCell align="center"> {user.username}</StyledTableCell>
                                <StyledTableCell align="center"> {user.name}</StyledTableCell> 
                                <StyledTableCell align="center"> {user.lastname}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button  onClick={() => deleteUser(user._id)}>
                                    <DeleteIcon  style={{cursor: 'pointer'}}/>
                                    </Button>
                                     
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

export default AdminUsers;


