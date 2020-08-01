import React from 'react'
import styled from 'styled-components'
import { SingleInput } from '../Atoms/input/singleInput'
import CircleBtn from '../Atoms/btn/circleBtn'
import { theme, StyledContainer } from '../../styles/index'

type Props = {
    leftLabel: string,
    rightLabel: string,
    leftOnClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    rightOnClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DoubleButtons: React.FC<Props> = props => {

    const { leftLabel, rightLabel, leftOnClickFunc, rightOnClickFunc } = props
    return (
        <StyledButtons theme={theme}>
            <StyledContainer>
                <CircleBtn label={leftLabel} onClickFunc={leftOnClickFunc} />
            </StyledContainer>
            <StyledContainer>
                <CircleBtn label={rightLabel} onClickFunc={rightOnClickFunc} />
            </StyledContainer>
        </StyledButtons>
    )
}

export default DoubleButtons

export const StyledButtons = styled.div`
    width: 310px;
    display: grid;
    grid-template-columns: 50% 50%50%;
`