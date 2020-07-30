import React from 'react'
import PassForm from './passForm'

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
        </div>
    )
}

export default Molecules