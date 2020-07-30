import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Header from './Organisms/Header'
import Atoms from './Atoms/indexAtoms'
import Molecules from './Molecules/indexMolecules'
import Login from './Pages/Login'
import Test from './Pages/Test'
import StartAttendance from './Pages/StartAttendance';
import Active from './Pages/Active';



function App() {

  return (
    <div className="App">
      <HashRouter>
        <Route exact={true} path="/test" component={Test} />
        <Route exact={true} path="/organisms" component={Header} />
        <Route exact={true} path="/atoms" component={Atoms} />
        <Route exact={true} path="/molecules" component={Molecules} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/attendance" component={StartAttendance} />
        <Route path="/active" component={Active} />
      </HashRouter>
    </div>
  );
}

export default App;
