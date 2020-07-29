import React from 'react'
import styled from 'styled-components'
type Props = {
    label: string
}

const SimpleText: React.FC<Props> = props => {
    const { label } = props
    return (
        <StyledSimpleText >
            {label}
        </StyledSimpleText>
    )
}

export default SimpleText

const StyledSimpleText = styled.div`
    padding: 10px;
    color: #000;
    background: #ECECEC;
`