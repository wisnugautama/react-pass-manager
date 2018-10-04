import React from 'react';
import { createNewPassword, getAllPassword } from '../actions/passManager';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Search from '../components/SearchButton';
import PasswordTable from '../components/PasswordTable';
import Validation from '../components/PasswordValidation';

class PasswordForm extends React.Component {
    constructor () {
        super() 
        this.state = {
            url: '',
            username: '',
            password: '', 
        }
    }

    setUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    setUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    setData = (event) => {
        event.preventDefault()
        this.props.createPassword(this.state, this.props.dataUser.email)
        this.setState({
            url: '',
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div className="container pass-form">
                <Title text="Create New Password" />
                <form onSubmit={ this.setData }>
                <div className="form-group">
                    <label >URL</label>
                    <input onChange={this.setUrl} value={ this.state.url } type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter URL"></input>
                </div>
                <div className="form-group">
                    <label >Username</label>
                    <input onChange={this.setUsername} value={ this.state.username } type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input onChange={this.setPassword} value={ this.state.password } type="password" className="form-control" placeholder="Enter Password"></input>
                </div>
                <Validation password={ this.state.password }/>
                </form>
                <Search />
                <PasswordTable/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPassword: (data,email) => {
            dispatch(createNewPassword(data,email))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.User
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm)