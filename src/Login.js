import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from './actions/auth';
import Main from './Main';

class Login extends Component {


    constructor(props)
    {
        super(props);
        this.state ={
            name : '',
            email : '',
        };
    }

     handleEmailChange = (e) => {
        this.setState({
          email: e.target.value,
        });
      };
    
      handleNameChange = (e) => {
        this.setState({
          name: e.target.value,
        });
      };

      handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('this.state', this.state);
        const { name, email } = this.state;
        this.props.dispatch(login(name, email));
      };

    render() {

        console.log('props',this.props);

        const {isLoggedin} = this.props.auth;

        if(isLoggedin)
        {
            return <Main name = {this.props.auth} />;
        }

        return (
            <div className="Login">
                 <form>
                    <h3>Log in</h3><br></br>
                    <input 
                        placeholder="Name" 
                        required
                        onChange = {this.handleNameChange}
                        value= {this.state.name}
                    /><br></br>

                    <input 
                        type="email" 
                        placeholder="Email" 
                        required
                        onChange = {this.handleEmailChange}
                        value= {this.state.email}
                    /><br></br>
                 </form>
                 <button onClick={this.handleFormSubmit}>
                    Log In
                </button>

            </div>
        );
        
    }
}

function mapStateToProps(state) {
    return {
      auth: state,
    };
  }
  
  export default connect(mapStateToProps)(Login);