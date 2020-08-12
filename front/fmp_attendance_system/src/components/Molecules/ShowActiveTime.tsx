import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { StyledContainer } from '../../styles/index'
import Timecard from './TimeCard'

type Props = {
    activity: string
}

const ShowActiveTime: React.FC<Props> = props => {

    return (
        <StyledShowActiveTime theme={{ ativity: props.activity }}>
            <StyledContainer>
                <Timecard label="前回の退勤" timeLabel="2/4 12:34" />
            </StyledContainer>
            <StyledContainer>
                <Timecard label="前回の労働時間" timeLabel="24:34" />
            </StyledContainer>
            {(props.activity == "leave") ?
                <StyledContainer>
                    <Timecard label="今回の労働時間" timeLabel="24:34" />
                </StyledContainer>
                : <div />
            }
        </StyledShowActiveTime>
    )
}

export default ShowActiveTime

const StyledShowActiveTime = styled.div`
    display:grid;
    padding: 10px;
    grid-template-rows: 165px 165px ${(props) => (props.theme.ativity == "leave") ? "165px" : "0px"};
transition: .4s;
`

