import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'
import ProductsList from "./pages/ProductsList";
import ShoppingCart from "./pages/ShoppingCart";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminUsers from "./pages/Admin/AdminUsers";
import NewTable from "./pages/Admin/NewTable";
import AddProduct from "./pages/Admin/AddProduct";
import AuthContext from "./context/AuthContext";
import React from "react";
import SingleProduct from "./pages/SingleProduct";
import EditProduct from "./pages/Admin/EditProduct";

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true


const App = () => {
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState({});

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const storageCart = localStorage.getItem("cart");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (storageCart) {
      const foundCart = JSON.parse(storageCart);
      setCart(foundCart);
    }
  }, []);

  const customSetCart = (newCart) => {
    if (user?.username) {
      const userCart = { ...cart, [user?.username]: newCart };
      localStorage.setItem("cart", JSON.stringify(userCart));
      setCart(userCart);
    }
  };


  return (
    <AuthContext.Provider value={{ user, setUser, cart: cart[user?.username] ?? [], customSetCart }}>
    <Router>
      <Switch>
        <Route exact path="/" exact component={Home}/>
        <Route exact path="/pages/Login" component={Login}/>
        <Route exact path="/pages/Register" component={Register}/>
        <Route exact path="/pages/ProductsList" component={ProductsList}/>
        <Route exact path="/pages/ShoppingCart" component={ShoppingCart}/>
        <Route exact path="/pages/Admin/AdminHomePage" component={AdminHomePage}/>
        <Route exact path="/pages/Admin/AdminProducts" component={AdminProducts}/>
        <Route exact path="/pages/Admin/AdminUsers" component={AdminUsers}/>
        <Route exact path="/pages/Admin/NewTable" component={NewTable}/>
        <Route exact path="/pages/Admin/AddProduct" component={AddProduct}/>
        <Route path="/product/:id" component={SingleProduct}/>
        <Route path="/admin/edit/:id" component={EditProduct}/>
      </Switch>

      
    </Router>
    </AuthContext.Provider>
  


  );

};

export default App;