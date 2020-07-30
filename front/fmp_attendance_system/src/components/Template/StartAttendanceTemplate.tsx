import React from 'react'
import Header from '../Organisms/Header'
import ShowTimes from '../Organisms/ShowTimes'
import Circlebtn from '../Atoms/btn/circleBtn'
import styled from 'styled-components'
import { StyledContainer, theme } from '../../styles/index'

const StartAttendanceTemplate: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    return (
        <StyledLogin>
            <Header />
            <FixedStyledContainer>
                <Circlebtn onClickFunc={testOnClick} label="出勤" />
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