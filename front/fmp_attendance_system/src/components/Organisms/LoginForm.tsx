import React from 'react'
import styled from 'styled-components'
import { theme, StyledContainer } from '../../styles/index'
import InputForm from '../Molecules/inputForm'
import PassForm from '../Molecules/passForm'

const LoginForm: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    const testOnChange = (e: React.ChangeEvent<HTMLInputElement>) => { }
    return (
        <StyledLoginForm theme={theme}>
            <StyledContainer>
                <InputForm onChangeFunc={testOnChange} label="名前" />
            </StyledContainer>
            <StyledContainer>
                <PassForm onChangeFunc={testOnChange} label="パスワード" />
            </StyledContainer>
        </StyledLoginForm>
    )
}

export default LoginForm

const StyledLoginForm = styled.div`
    display:grid;
    grid-template-rows: 170px 170px;
    transition: .4s;
`

