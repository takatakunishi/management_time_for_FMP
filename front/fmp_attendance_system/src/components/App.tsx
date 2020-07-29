import React from 'react';
import NormalBtn from './Atoms/btn/normalBtn'
import CircleBtn from './Atoms/btn/circleBtn'
import SingleInput from './Atoms/input/singleInput'
import PassInput from './Atoms/input/passInput'
import SimpleText from './Atoms/text/simpleText'
import BigText from './Atoms/text/bigText'


function App() {
  const testOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { }
  const testOnChenge = (e: React.ChangeEvent<HTMLInputElement>) => { }
  return (
    <div className="App">
      <NormalBtn onClick={testOnClick} label="nomalButton" />
      <CircleBtn onClick={testOnClick} label="circleButton" />
      <SingleInput onChenge={testOnChenge} label="singleInput" />
      <PassInput onChenge={testOnChenge} label="passInput" />
      <SimpleText label="simpleText" />
      <BigText label="bigText" />
    </div>
  );
}

export default App;
