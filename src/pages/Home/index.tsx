import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Header } from '../../components/molecules'

const Home: React.FC<any> = () => {
    const theme = useSelector((state: any) => state.theme)

    return (
        <Div theme={theme}>
            <Header/>
        </Div>
    )
}

export default Home

const Div = styled.div<{ theme?: string }>`
    background-color: ${({ theme }) => theme === 'dark' ? 'var(--background-dark-theme)' : 'var(--background-light-theme)'};
    height: 100vh;
    width: 100%;

`