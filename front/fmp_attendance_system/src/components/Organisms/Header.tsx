import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/index'
import { ThemeProvider } from 'styled-components'

const Header: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledHeader>
                <StyledTitle>
                    Manadance
                </StyledTitle>
            </StyledHeader>
        </ThemeProvider>
    )
}

export default Header

const StyledHeader = styled.header`
    display:flex;
    justify-content: center;
    height:45px;
    padding: 5px 0;
    transition: .4s;
    background: ${(props) => props.theme.colorTheme.main.color};
`
const StyledTitle = styled.div`
    font-family: "Bookman Old Style";
    display: inline-block;
    font-size: 35px;
    color: #000;
`
