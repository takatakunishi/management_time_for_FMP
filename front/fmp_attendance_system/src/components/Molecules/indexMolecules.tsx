import React from 'react'
import PassForm from './passForm'
import InputForm from './inputForm'
import TimeCard from './TimeCard'

type Props = {
    label: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Molecules: React.FC = () => {
    const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
    const testOnChenge = (e: React.ChangeEvent<HTMLInputElement>) => { }
    const testLabel = "testLabel"
    return (
        <div>
            <PassForm onChangeFunc={testOnChenge} label="パンジャンドラム" />
            <InputForm onChangeFunc={testOnChenge} label="英国面" />
            <TimeCard label="前回の退勤" timeLabel="2/4 24:34" />
        </div>
    )
}

export default Molecules