import React from 'react'
import styled from 'styled-components'
import { complete_routines } from '../data'
import CompleteRoutine from './CompleteRoutine'

const Container = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const CompleteRoutines = () => {
    return (
        <Container>
            {complete_routines.map(item=>(
                <CompleteRoutine item={item}/>
            ))}
            
        </Container>
    );
};

export default CompleteRoutines;