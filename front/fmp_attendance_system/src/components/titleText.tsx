import React from 'react'
import { theme } from '../styles/index'
import styled, { ThemeProvider } from 'styled-components'

const TitleText: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledSimpleText >
                test
            </StyledSimpleText>
        </ThemeProvider>
    )
}

export default TitleText

export const StyledSimpleText = styled.div`
    display: inline-block;
    font-size:${(props) => props.theme.fontTheme.text.normalFontSize};
    padding: 10px;
    color: #000;
    background: #ECECEC;
`