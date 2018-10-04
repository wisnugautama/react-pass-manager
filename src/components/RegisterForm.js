import React from 'react';
import { registerUser } from '../actions/User';
import { connect } from 'react-redux';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }

    }

    setUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    setRegisterUser = (event) => {
        event.preventDefault()
        this.props.register(this.state)
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.setRegisterUser }>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={ this.setUsername } value={ this.state.username } type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={ this.setEmail } value={ this.state.email } type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={ this.setPassword } value={ this.state.password } type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <button type="submit" className="btn btn-dark">Register</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (input) => {
            dispatch(registerUser(input))
        }
    }
}

export default connect(null, mapDispatchToProps)(Register)