import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Organisms/Header'
import ShowTimes from '../Organisms/ShowTimes'
import Circlebtn from '../Atoms/btn/circleBtn'
import styled from 'styled-components'
import { StyledContainer, theme } from '../../styles/index'

const StartAttendanceTemplate: React.FC = () => {
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
        <StyledLogin>
            <Header />
            <FixedStyledContainer>
                <Circlebtn onClickFunc={activityChange("active/working")} label="出勤" />
            </FixedStyledContainer>
            <FixedStyledContainer >
                <ShowTimes />
            </FixedStyledContainer>
        </StyledLogin>
    )
}

export default StartAttendanceTemplate

const StyledLogin = styled.div`
`
const FixedStyledContainer = styled(StyledContainer)`
    padding-top: 20px;
`