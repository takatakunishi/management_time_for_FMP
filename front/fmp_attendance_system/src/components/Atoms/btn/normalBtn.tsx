import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const NormalBtn: React.FC<Props> = props => {
    const { label, onClick } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledNormalBtn onClick={onClick}>
                {label}
            </StyledNormalBtn>
        </ThemeProvider>
    )
}

export default NormalBtn

const StyledNormalBtn = styled.button`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontTheme.btn.normal.normalFontSize};
    padding: 10px;
    height: 40px;
    color: ${(props) => props.theme.colorTheme.btn.normal.color};
    background: ${(props) => props.theme.colorTheme.btn.normal.background};
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