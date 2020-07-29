import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CircleBtn: React.FC<Props> = props => {
    const { label, onClick } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledNormalBtn onClick={onClick}>
                {label}
            </StyledNormalBtn>
        </ThemeProvider>
    )
}

export default CircleBtn

const StyledNormalBtn = styled.button`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontTheme.btn.normal.normalFontSize};
    height:150px;
    width:150px;
    padding: 10px;
    color: ${(props) => props.theme.colorTheme.btn.normal.color};
    background: ${(props) => props.theme.colorTheme.btn.normal.background};
    transition: .4s;
    border-radius:50%;
    border:none;
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