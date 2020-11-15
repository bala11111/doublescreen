import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cmp1 from './Cmp1';
import Cmp2 from './Cmp2';

class Main extends Component {
    render() {
        const {name} = this.props.auth;
        return (
            <div className="main">
                <Cmp1 name = {this.props.auth}/>
                <Cmp2/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state,
    };
  }
  
  export default connect(mapStateToProps)(Main);