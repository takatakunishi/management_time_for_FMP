import React from 'react'
import NormalBtn from './btn/normalBtn'
import CircleBtn from './btn/circleBtn'
import { SingleInput } from './input/singleInput'
import PassInput from './input/passInput'
import SimpleText from './text/simpleText'
import BigText from './text/bigText'
import TitleText from './text/titleText'

type Props = {
    label: string,
    onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Atoms: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    const testOnChenge = (e: React.ChangeEvent<HTMLInputElement>) => { }
    return (
        <div>
            <NormalBtn onClickFunc={testOnClick} label="nomalButton" />
            <CircleBtn onClickFunc={testOnClick} label="circleButton" />
            <SingleInput onChangeFunc={testOnChenge} label="singleInput" />
            <PassInput onChangeFunc={testOnChenge} label="passInput" />
            <SimpleText label="simpleText" />
            <BigText label="bigText" />
            <TitleText label="titleText" />
        </div>
    )
}

export default Atoms