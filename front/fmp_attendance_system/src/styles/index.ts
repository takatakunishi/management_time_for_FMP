import { fontTheme } from './Font'
import { colorTheme } from './Color'
import { sizeTheme } from './Size'
import styled from 'styled-components'

export const theme = {
    colorTheme: colorTheme,
    fontTheme: fontTheme,
    sizeTheme: sizeTheme,
}

export const StyledContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`

