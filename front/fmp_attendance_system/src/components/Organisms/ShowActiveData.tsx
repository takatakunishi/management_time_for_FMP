import React from 'react'
import { Route, HashRouter, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { theme, StyledContainer } from '../../styles/index'
import ShowActiveTime from '../Molecules/ShowActiveTime'
import DdoubleButtons from '../Molecules/doubleButtons'
import CircleBtn from '../Atoms/btn/circleBtn'
import TitleText from '../Atoms/text/titleText'

const ShowActiveData: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    const testOnChange = (e: React.ChangeEvent<HTMLInputElement>) => { }
    const history = useHistory();
    const activity: string = window.location.hash.replace("#/active/", '').toString()
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

    var leftFunc: void
    var rightFunc: void

    return (
        <StyledShowTimes theme={theme}>
            <StyledContainer>
                {(activity == "working") ?
                    <DdoubleButtons leftLabel="休憩(入)" rightLabel="退勤" leftOnClickFunc={activityChange("active/rest")} rightOnClickFunc={activityChange("active/leave")} />
                    : (activity == "rest") ?
                        <CircleBtn label="作業" onClickFunc={activityChange("active/working")} />
                        : (activity == "leave") ?
                            <TitleText label="お疲れさまでした" /> : <div>false load</div>
                }
            </StyledContainer>
            <StyledContainer>
                <ShowActiveTime activity={activity} />
            </StyledContainer>
        </StyledShowTimes>
    )
}

export default ShowActiveData

const StyledShowTimes = styled.div`
    display:grid;
    height:auto;
    grid-template-rows: auto auto;
    transition: .4s;
`

