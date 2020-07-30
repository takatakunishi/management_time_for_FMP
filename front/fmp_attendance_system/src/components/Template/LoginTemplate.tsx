import React from 'react'
import Header from '../Organisms/Header'
import LoginForm from '../Organisms/LoginForm'
import TitleTest from '../Atoms/text/titleText'
import styled from 'styled-components'
import { StyledContainer, theme } from '../../styles/index'

const Login: React.FC = () => {
    return (
        <StyledLogin>
            <Header />
            <StyledLoginContainer>
                <TitleTest label="体は資本！" />
            </StyledLoginContainer>
            <StyledLoginContainer >
                <LoginForm />
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