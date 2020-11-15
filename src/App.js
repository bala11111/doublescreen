
import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Login/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state,
  };
}

export default connect(mapStateToProps)(App);
