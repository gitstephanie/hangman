import React, { Component } from 'react';
import './App.css';
//import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import store from './store';
import {Route} from 'react-router-dom'
import HangmanContainer from './components/HangmanContainer';
import HomeContainer from './components/HomeContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path={`/`} component={HomeContainer}/>
          <Route path={`/hangman`} component={HangmanContainer}/>
        </div>
      </Provider>
    );
  }
}
/*
const mapStateToProps = (state) => {
  return {

  }
}
export default connect (mapStateToProps) (App);
*/
export default App;
