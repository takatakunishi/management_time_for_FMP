import React from 'react'
import { useDispatch } from 'react-redux'
import Header from '../Organisms/Header'
import LoginForm from '../Organisms/LoginForm'
import TitleTest from '../Atoms/text/titleText'
import LargeBtn from '../Atoms/btn/largeBtn'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { StyledContainer, theme } from '../../styles/index'
import { getUserAction } from '../../actions/Users/ActionCreater'

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(getUserAction.request({ id: "x" }))
        console.log("clicked")
        history.push({
            pathname: '/' + "attendance",
            state: {
            }
        })
    }
    return (
        <StyledLogin>
            <Header />
            <StyledLoginContainer>
                <TitleTest label="体は資本！" />
            </StyledLoginContainer>
            <StyledLoginContainer>
                <LoginForm />
            </StyledLoginContainer>
            <StyledLoginContainer >
                <LargeBtn label="Login" onClickFunc={handleClick} />
            </StyledLoginContainer>
        </StyledLogin>
    )
}

export default Login

const StyledLogin = styled.div`
`
const StyledLoginContainer = styled(StyledContainer)`
    padding-top: 20px;
`