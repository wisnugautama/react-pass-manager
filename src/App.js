import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import './App.css';
import Home from './views/Home.js';
import PasswordManager from './views/PasswordManager';
import User from './views/User';
import Search from './components/SearchButton'
import Navbar from './components/Navbar';
import EditForm from './components/EditForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Switch> */}
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home}/>
              <Route exact path="/user" component={User} />
              <Route exact path="/password" component={PasswordManager}/>
              <Route exact path="/edit/:email/:id" component={EditForm}/>
            </div>
          {/* </Switch> */}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
