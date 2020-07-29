import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onChenge: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SingleInput: React.FC<Props> = props => {
    const { label, onChenge } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledSingleInput onChange={onChenge} placeholder={label} />
        </ThemeProvider>
    )
}

export default SingleInput

const StyledSingleInput = styled.input`
    &::placeholder{
        color: ${(props) => props.theme.colorTheme.input.placeholder.color};
        font-size: ${(props) => props.theme.fontTheme.text.normalFontSize};
    }
    height:${(props) => props.theme.sizeTheme.input.height};
    width:${(props) => props.theme.sizeTheme.input.width};
    padding: 5px;
    background: #ECECEC;
    border: 2px solid #B0E0E6;
    transition: .4s;
    color: ;
    &:focus {
        cursor: pointer;
        background: smorkwhite;
        outline:0;
        border: 2px solid #00BFFF;
    }
`