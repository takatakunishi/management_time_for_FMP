import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const NormalBtn: React.FC<Props> = props => {
    const { label, onClickFunc } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledNormalBtn onClick={onClickFunc}>
                {label}
            </StyledNormalBtn>
        </ThemeProvider>
    )
}

export default NormalBtn

export const StyledNormalBtn = styled.button`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontTheme.btn.normal.normalFontSize};
    padding: 10px;
    height: ${(props) => props.theme.sizeTheme.btn.height};
    color: ${(props) => props.theme.colorTheme.btn.normal.color};
    background: ${(props) => props.theme.colorTheme.btn.normal.background};
    border-radius: ${(props) => props.theme.sizeTheme.btn.borderRadius};
    transition: .4s;
    border-style: none;
    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colorTheme.btn.hover.background};
        color: ${(props) => props.theme.colorTheme.btn.hover.color};
    }
    &:focus {
        outline:0;
    }
    &:active {
        cursor: pointer;
        background: ${(props) => props.theme.colorTheme.btn.active.background};
        color: ${(props) => props.theme.colorTheme.btn.active.color};
        transition: 0s;
    }
`