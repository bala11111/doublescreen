import React from 'react';
import {logout} from './actions/auth';
import { connect } from 'react-redux';
import {fetchLink} from './actions/fetchlink'

class Cmp2 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state ={
            url : ''
        };
    }

    handleLogout = () => {
       this.props.dispatch(logout());
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
        return (
            <div className="component2">
            <div className="cmp2">
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

                <button onClick= {this.handleLogout}>Logout</button>
            </div>

            <div className="screen">

            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state,
    };
  }
  
  export default connect(mapStateToProps)(Cmp2);