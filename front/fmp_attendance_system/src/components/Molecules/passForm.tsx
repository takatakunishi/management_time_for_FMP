import React from 'react'
import styled from 'styled-components'
import PassInput from '../Atoms/input/passInput'
import BigText from '../Atoms/text/bigText'
import { theme } from '../../styles/index'
import { StyledInputForm, StyledContainer } from './inputForm'

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

export const StyledPassForm = styled(StyledInputForm)`
`