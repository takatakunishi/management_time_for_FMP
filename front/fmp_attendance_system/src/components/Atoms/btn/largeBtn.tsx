import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'
import {StyledNormalBtn} from './normalBtn'

type Props = {
    label: string,
    onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const NormalBtn: React.FC<Props> = props => {
    const { label, onClickFunc } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledLeargeBtn onClick={onClickFunc}>
                {label}
            </StyledLeargeBtn>
        </ThemeProvider>
    )
}

export default NormalBtn

export const StyledLeargeBtn = styled(StyledNormalBtn)`
    font-size: ${(props) => props.theme.fontTheme.btn.normal.largeFontSize};
    padding: ${(props) => props.theme.sizeTheme.btn.largePaddingTD}, ${(props) => props.theme.sizeTheme.btn.largePaddingRL};
    height: ${(props) => props.theme.sizeTheme.btn.largeHeight};
`