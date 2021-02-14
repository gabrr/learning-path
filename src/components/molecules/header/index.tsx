import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Header: React.FC<any> = () => {
    const theme = useSelector((state: any) => state.theme)
    
    return (
        <Div theme={theme}>
            <h1>gabrr learning path</h1>
        </Div>
    )
}

export default Header

const Div = styled.div<{ theme?: string }>`
    color: ${({ theme }) => theme === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)'};
    height: 70px;
    width: calc(100% - 30px);
    padding: 30px;

`