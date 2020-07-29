import React from 'react'
import styled from 'styled-components'
type Props = {
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const NormalBtn: React.FC<Props> = props => {
    const { label, onClick } = props
    return (
        <StyledNormalBtn onClick={onClick}>
            {label}
        </StyledNormalBtn>
    )
}

export default NormalBtn

const StyledNormalBtn = styled.button`
    font-weight: bold;
    padding: 10px;
    color: #00BCD4;
    background: #ECECEC;
    transition: .4s;
    border-style: none;
    &:hover {
        cursor: pointer;
        background: #00bcd4;
        color: white;
    }
    &:focus {
        outline:0;
    }
    &:active {
        cursor: pointer;
        background: blue;
        color: white;
        transition: 0s;
    }
`