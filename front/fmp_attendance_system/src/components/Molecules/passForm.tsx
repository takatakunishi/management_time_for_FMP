import React from 'react'
import styled from 'styled-components'
import PassInput from '../Atoms/input/passInput'
import BigText from '../Atoms/text/bigText'
import { theme } from '../../styles/index'

type Props = {
    label: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PassForm: React.FC<Props> = props => {
    const { label, onChangeFunc } = props
    return (
        <StyledPassForm theme={theme}>
            <StyledContainer>
                <BigText label={label} />
            </StyledContainer>
            <StyledContainer>
                <PassInput onChangeFunc={onChangeFunc} label={label} />
            </StyledContainer>
        </StyledPassForm>
    )
}

export default PassForm

export const StyledPassForm = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    width: 310px;
    height: 130px;
    padding: 7px;
    border: 2px solid ${(props) => props.theme.colorTheme.input.normal.border};
    border-radius: 20px;
`

export const StyledContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`