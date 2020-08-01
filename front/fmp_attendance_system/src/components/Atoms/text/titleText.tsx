import React from 'react'
import { theme } from '../../../styles/index'
import styled, { ThemeProvider } from 'styled-components'
import { StyledSimpleText } from './simpleText'

type Props = {
    label: string
}

const TitleText: React.FC<Props> = props => {
    const { label } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledBigText >
                {label}
            </StyledBigText>
        </ThemeProvider>
    )
}

export default TitleText

const StyledBigText = styled(StyledSimpleText)`
    font-size:${(props) => props.theme.fontTheme.text.titleFontSize};
`