import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SingleInput: React.FC<Props> = props => {
    const { label, onChangeFunc } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledSingleInput onChange={onChangeFunc} placeholder={label} />
        </ThemeProvider>
    )
}

export const StyledSingleInput = styled.input`
    &::placeholder{
        color: ${(props) => props.theme.colorTheme.input.placeholder.color};
        font-size: ${(props) => props.theme.fontTheme.text.normalFontSize};
    }
    height:${(props) => props.theme.sizeTheme.input.height};
    width:${(props) => props.theme.sizeTheme.input.width};
    padding-left: ${(props) => props.theme.sizeTheme.input.paddingLeft};
    background: ${(props) => props.theme.colorTheme.input.normal.background};
    border: 2px solid ${(props) => props.theme.colorTheme.input.normal.border};
    transition: .4s;
    border-radius: ${(props) => props.theme.sizeTheme.input.borderRadius};
    &:focus {
        cursor: pointer;
        background: ${(props) => props.theme.colorTheme.input.focus.background};
        outline:0;
        border: 2px solid ${(props) => props.theme.colorTheme.input.focus.border};
    }
`