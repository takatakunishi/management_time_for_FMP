import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string
}

const SimpleText: React.FC<Props> = props => {
    const { label } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledSimpleText >
                {label}
            </StyledSimpleText>
        </ThemeProvider>
    )
}

export default SimpleText

export const StyledSimpleText = styled.div`
    display: inline-block;
    font-size:${(props) => props.theme.fontTheme.text.normalFontSize};
    padding: 10px;
    color: #000;
    background: #ECECEC;
`