import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from "styled-components"
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'
import React from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.businessoffashion.com/arc-prod-images/GBTY63KM6ZCTXPQXD3AHCSMYAY?auto=format%2Ccompress&crop=faces%2Centropy&fit=crop&max-h=512&w=1024") center;
  display: flex;
  align-items: center;
  justify-content: center;


`
const Wrapper = styled.div`
  padding: 20px;
  width: auto;
  background-color: white;
  border-radius: 8px;

`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

`
const Title = styled.h1`
  font-size: 34px;
  margin-top: 10px;
 // margin-left: 155px;

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;

`

const Button = styled.button`
  margin-top: 20px;
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
const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
`
const TextLink = styled.a`
  margin: 10px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: white; 
  font-weight: bold;
`;

// const Error = styled.span`
//   color: red;
// `;

const Login = () => {

  
    const history = useHistory();

    const {setUser} = React.useContext(AuthContext);
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('/login',{
            username,
            password
        })

        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));

        if(res.status === 200){
            history.push('/')
        }
    }

  return (
    <Container>
      <Wrapper>
 
        <Form>
          <Title>SIGN IN</Title>
         <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
         <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button  onClick={(e) => handleLogin(e)}>
            LOGIN
          </Button>
          <Text>Not yet registered?  <Link to="./Register" style={{ color: '#6f2da8'}}><TextLink>Register now</TextLink> </Link></Text>
         
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;