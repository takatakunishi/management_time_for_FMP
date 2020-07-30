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
    height:150px;
    width:150px;
    border-radius:50%;
`