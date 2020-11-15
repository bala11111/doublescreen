import React, { Component } from 'react';
import {fetchLink} from './actions/fetchlink';
import { connect } from 'react-redux';

class Cmp1 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state ={
            url : ''
        };
    }

    handleUrlSubmit = (e) => {
        e.preventDefault();
        console.log('url state', this.state);
        const { url } = this.state;
        this.props.dispatch(fetchLink(url));
    }

    handleChangeUrl = (e) => {
        this.setState({
            url: e.target.value,
        });
    }

    render() {
        const {name} = this.props.auth;

        return (
            <div className="component1">
            <div className="cmp1">
              <div className="name">
                 <h2>{name}</h2>
              </div>
            <form>
                <textarea 
                rows="1" cols="50"
                placeholder="Enter url" 
                required
                onChange = {this.handleChangeUrl}
                value= {this.state.url}
                ></textarea>
                <button type="submit" onClick = {this.handleUrlSubmit}>Submit</button>
                </form>


            </div>

            <div className="screen">

            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth : state,
    };
  }

  export default connect(mapStateToProps)(Cmp1);