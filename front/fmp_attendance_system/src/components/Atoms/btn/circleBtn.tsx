import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'
import { StyledNormalBtn } from './normalBtn'

type Props = {
    label: string,
    onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CircleBtn: React.FC<Props> = props => {
    const { label, onClickFunc } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledCircleBtn onClick={onClickFunc}>
                {label}
            </StyledCircleBtn>
        </ThemeProvider>
    )
}

export default CircleBtn

const StyledCircleBtn = styled(StyledNormalBtn)`
    height: ${(props) => props.theme.sizeTheme.btn.circleSize};
    width: ${(props) => props.theme.sizeTheme.btn.circleSize};
    font-size: ${(props) => props.theme.fontTheme.btn.normal.biggestFontSize};
    font-weight:normal;
    border-radius:50%;
`