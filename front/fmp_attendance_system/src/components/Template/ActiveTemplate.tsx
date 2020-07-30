import React from 'react'
import Header from '../Organisms/Header'
import ShowActiveData from '../Organisms/ShowActiveData'
import styled from 'styled-components'
import { StyledContainer, theme } from '../../styles/index'

const ActiveTemplate: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    return (
        <div>
            <Header />
            <FixedStyledContainer >
                <ShowActiveData />
            </FixedStyledContainer>
        </div>
    )
}

export default ActiveTemplate

const FixedStyledContainer = styled(StyledContainer)`
    padding-top: 20px;
`