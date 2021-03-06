import React from 'react';
import Header from './components/common/header';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupMethod from './pages/signup/method';
import SignupVerify from './pages/signup/verify';
import Guidelines from './pages/guidelines';
import Faq from './pages/faq';
import About from './pages/about';

import Web from './components/Camera/WebcamCapture';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/signup/method' component={SignupMethod} />
        <Route path='/signup/verify' component={SignupVerify} />
        <Route exact path='/guidelines' component={Guidelines} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/camera' component={Web} />
      </Switch>
    </>
  );
}

export default App;
