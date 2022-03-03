import { ListItem } from "@material-ui/core";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data"
import ProductsList from "../pages/ProductsList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #white;
    position: relative;
    overflow: hidden;
    //background-color: black;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #E8E8E8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin-top: 10px;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
     
`
const Slide = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;


`
const ImgContainer = styled.div`
    height: 70%;
    flex: 1;


`
const Image = styled.img`
    height: 70%;
   margin-left: 60px;
    margin-right: 0px;
   // margin-top: 10px;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1px 50px 200px 50px;
    background-color: #${props=>props.bg}
`

const Title = styled.h1`
    font-size: 25px;
    margin: 50px, 0px;
    font-weight: bold;
`

const Desc = styled.p`
    //margin-top: 10px;
    //margin-left: 50px;
    margin: 50 px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`
const Button = styled.button`
    background-color:  white;
    padding: 15px;
    font-size: 10px;
    cursor: pointer;
    margin-top: 50px;
    border: 3px solid;
    border-radius: 5px;
    font-weight: 700;
    border-color: #E6E6FA;
    //border: none;
    &:hover{
       // background-color: #CBC3E3;
       // background-color: #BDB5D5;
       background-color: #E6E6FA
    }
`


const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0  ? slideIndex -1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }

    };
    return (
        <Container>
           <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ArrowLeftOutlined/>
           </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide >
                    <ImgContainer>
                        <Image src= {item.img}/>
                    </ImgContainer>
                    <InfoContainer bg={item.bg}>
                        <Title> 
                            {item.title}
                        </Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Link to="../pages/ProductsList">
                         <Button visibility={item.visibility}>
                                {item.button_name}   
                         </Button>
                        </Link>
                       
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
           <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ArrowRightOutlined/>
           </Arrow>
        </Container>
    )
}

export default Slider;
