import React from 'react'
import { Route, HashRouter, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { theme, StyledContainer } from '../../styles/index'
import Timecard from '../Molecules/TimeCard'

const ShowActiveData: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    const testOnChange = (e: React.ChangeEvent<HTMLInputElement>) => { }
    const history = useHistory();
    const activityChange = (activity: string) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            history.push({
                pathname: '/' + activity,
                state: {
                }
            })
        }
        return handleClick
    }

    return (
        <StyledShowTimes theme={theme}>
            <StyledContainer>
                <Timecard label="前回の退勤" timeLabel="2/4 12:34" />
            </StyledContainer>
            <StyledContainer>
                <Timecard label="前回の労働時間" timeLabel="24:34" />
            </StyledContainer>
        </StyledShowTimes>
    )
}

export default ShowActiveData

const StyledShowTimes = styled.div`
    display:grid;
    grid-template-rows: 170px 170px;
    transition: .4s;
`

