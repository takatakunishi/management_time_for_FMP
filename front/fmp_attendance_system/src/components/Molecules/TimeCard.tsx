import React from 'react'
import styled from 'styled-components'
import { SingleInput } from '../Atoms/input/singleInput'
import BigText from '../Atoms/text/bigText'
import { theme, StyledContainer } from '../../styles/index'

type Props = {
    label: string,
    timeLabel: string,
}

const TimeCard: React.FC<Props> = props => {
    const { label, timeLabel } = props
    return (
        <StyledCard theme={theme}>
            <StyledContainer>
                <BigText label={label} />
            </StyledContainer>
            <StyledContainer>
                <BigText label={timeLabel} />
            </StyledContainer>
        </StyledCard>
    )
}

export default TimeCard

export const StyledCard = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    width: 310px;
    height: 130px;
    padding: 7px;
    border: 2px solid ${(props) => props.theme.colorTheme.input.normal.border};
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`