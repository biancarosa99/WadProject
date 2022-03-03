import React from 'react'
import styled from 'styled-components'
import { hair_routines } from '../data'
import HairRoutine from './HairRoutine'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

const HairRoutines = () => {
    return (
        <Container>
            {hair_routines.map(item=>(
                <HairRoutine item={item}/>
            ))}
            
        </Container>
    );
};

export default HairRoutines;
