import React from 'react'
import styled from 'styled-components'
import { SingleInput } from '../Atoms/input/singleInput'
import BigText from '../Atoms/text/bigText'
import { theme, StyledContainer } from '../../styles/index'

type Props = {
    label: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm: React.FC<Props> = props => {
    const { label, onChangeFunc } = props
    return (
        <StyledInputForm theme={theme}>
            <StyledContainer>
                <BigText label={label} />
            </StyledContainer>
            <StyledContainer>
                <SingleInput onChangeFunc={onChangeFunc} label={label} />
            </StyledContainer>
        </StyledInputForm>
    )
}

export default InputForm

export const StyledInputForm = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    width: 310px;
    height: 130px;
    padding: 7px;
    border: 2px solid ${(props) => props.theme.colorTheme.input.normal.border};
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`