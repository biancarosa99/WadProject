import styled from "styled-components"
import { Room, LocalPhone, EmailOutlined } from "@material-ui/icons"
import { Instagram, Facebook  } from "@material-ui/icons"

const Container = styled.div`
    display: flex; //same row
    background-color: #E6E6FA;
    
   // height: 70px;
  
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
   // background-color: red;
`
const Title = styled.div`
    margin-bottom: 10px; 
    flex-direction: column;

`
const Content =styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  //  margin-top: 10px;
  //  margin-bottom: 5px;
    
`

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  //  margin-left: 150px;
   // margin-bottom: 20px;
   /background-color: gray;

`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>
                <Content >
                    <Room fontSize="small"/>   Timisoara: Paris Street, Nr.7
                </Content>  
                <Content>
                <Room fontSize="small"/>  Bucharest: Union Square, Nr.10
                </Content>
                </Title>
                
            </Left>
            <Center>
               <Title>
                <Content >
                    <LocalPhone style={{marginRight: 3}}fontSize="small"/> 0040745101343              
              </Content>
                <Content>
                    <EmailOutlined style={{marginRight: 3}} fontSize="small"/> haircare_boutique@yahoo.com
                </Content>
                </Title>
            </Center>
            <Right>
               <Title>
                <Content >
                    <Facebook style={{marginRight: 3}} fontSize="small"/>   HairCareBoutique.facebook.com
                </Content>
                <Content>
                    <Instagram style={{marginRight: 3}} fontSize="small"/> HairCareBoutique.instagram.com
                </Content>
                </Title>
             </Right>           
        </Container>
    )
}

export default Footer;
