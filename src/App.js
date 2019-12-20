import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import ChatBox from './components/ChatBox/ChatBox.js';
import SingUp from './components/SingUp/SingUp';

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Header />
      <Switch>
        <Route path="/home" component={ChatBox}></Route>
        <Route path="/sing-up" component={SingUp}></Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
