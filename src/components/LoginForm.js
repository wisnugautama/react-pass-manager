import React from 'react';
import { loginUser } from '../actions/User';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            passowrd: ''
        }
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            passowrd: event.target.value
        })
    }

    setLoginUser = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.setLoginUser }>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={this.setEmail} value={this.state.email} type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={this.setPassword} value={this.state.password} type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (input) => {
            dispatch(loginUser(input))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)