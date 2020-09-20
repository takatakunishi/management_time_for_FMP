import React from 'react'
import styled from 'styled-components'
type Props = {
    label: string,
    onChenge: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SingleInput: React.FC<Props> = props => {
    const { label, onChenge } = props
    return (
        <StyledSingleInput onChange={onChenge} placeholder={label} />
    )
}

export default SingleInput

const StyledSingleInput = styled.input`
    &::placeholder{
        color: #00BCD4;
    }
    height:30px;
    padding: 5px;
    background: #ECECEC;
    border: 2px solid #B0E0E6;
    transition: .4s;
    color: #00BCD4 ;
    &:focus {
        cursor: pointer;
        background: smorkwhite;
        outline:0;
        border: 2px solid #00BFFF;
    }
`