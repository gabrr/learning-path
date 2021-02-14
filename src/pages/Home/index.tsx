import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/molecules'

const Home: React.FC<any> = () => {
    return (
        <Div>
            <Header/>
        </Div>
    )
}

export default Home

const Div = styled.div`
    background-color: #000;

`