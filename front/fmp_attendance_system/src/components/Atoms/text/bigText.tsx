import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string
}

const BigText: React.FC<Props> = props => {
    const { label } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledBigText >
                {label}
            </StyledBigText>
        </ThemeProvider>
    )
}

export default BigText

const StyledBigText = styled.div`
    display: inline-block;
    font-size:${(props) => props.theme.fontTheme.text.largeFontSize};
    padding: 10px;
    color: #000;
    background: #ECECEC;
`