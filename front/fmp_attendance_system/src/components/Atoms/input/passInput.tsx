import React from 'react'
import styled from 'styled-components'
import { StyledSingleInput } from './singleInput'
import { theme } from '../../../styles/index'
import { ThemeProvider } from 'styled-components'

type Props = {
    label: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PassInput: React.FC<Props> = props => {
    const { label, onChangeFunc } = props
    return (
        <ThemeProvider theme={theme}>
            <StyledPassInput onChange={onChangeFunc} placeholder={label} type="password" />
        </ThemeProvider>
    )
}

export default PassInput

const StyledPassInput = styled(StyledSingleInput)``