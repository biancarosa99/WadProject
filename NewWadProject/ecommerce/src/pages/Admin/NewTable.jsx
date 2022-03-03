// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import MaterialTable from 'material-table'
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';

// const NewTable = () => {
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
    
//     // const coulumns =[
//     //     { title: "Username", field: "username"},
//     //     { title: "First name", field: "name"},
//     //     { title: "Last Name", field: "lastname"},
        
//     // ];
//     return (
//         <div style={{maxWidth: '100%'}}>
           
                
//                 <MaterialTable
                    
//                 title="Users List"
//                 columns={[
//                 { title: "Username", field: "username"},
//                 { title: "First name", field: "name"},
//                 { title: "Last Name", field: "lastname"},
                
//                 ]}
//                 users = {users}
//             /> 

                
         
                       
//         </div>
//     );
// };

// export default NewTable;
