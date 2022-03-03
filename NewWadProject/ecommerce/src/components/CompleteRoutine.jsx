import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    bottom: 0;
    //left: 0;
    margin-left: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   
    //background-color: gray;
   
`
const Title = styled.h3``
const Desc = styled.div``

export const CompleteRoutine = ({item}) => {
    return (
        <Container>
             <Image src ={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Desc>
                    {item.desc}
                </Desc>
            </Info>
            
        </Container>
    );
};

export default CompleteRoutine;