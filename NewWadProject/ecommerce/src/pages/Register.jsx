import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from "styled-components"

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
  //border-radius: 5%;
  border-radius: 12px;
  &:hover{
      // background-color: #b19cd9;
      background-color: #7D4BB1;
  }
  background-color:#6f2da8;
  color: white;
  cursor: pointer;
`


const Register = () => {

  const history = useHistory();

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();

        
        if(password === confirmPassword){
        const res = await axios.post('/register', {
                        name,
                        lastname,
                        username,
                        email,
                        password,
                        confirmPassword
                    })
                  
        if(res.status === 201){
            history.push('/pages/Login')
        }
      }
    }
  return (
    <Container>
      <Wrapper>
      
        <Form>
          <Title>JOIN US!</Title>
          <Input placeholder="name" value={name} maxLength={15} onChange={(e) => setName(e.target.value)}/>
          <Input placeholder="last name" value={lastname} maxLength={15} onChange={(e) => setLastname(e.target.value)}/>            
          <Input placeholder="username" value={username} maxLength={15} onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" type="email" value={email} maxLength={50} onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" type="password" value={password} maxLength={20} onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="confirm password" type="password" value={confirmPassword} maxLength={20} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <Button onClick={(e) => handleRegister(e)}>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
