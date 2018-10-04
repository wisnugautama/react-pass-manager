import React from 'react';
import db from '../firebase';
import Validation from '../components/PasswordValidation';
import { connect } from 'react-redux';
import { createNewPassword, getAllPassword } from '../actions/passManager';

class EditForm extends React.Component {
    constructor() {
        super()
        this.state = {
            url: '',
            username: '',
            password: ''
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
        this.props.createPassword(this.state, this.props.match.params.email)
        this.setState({
            url: '',
            username: '',
            password: '',
        })
    }

    componentDidMount() {
        db.settings({
            timestampsInSnapshots: true
        })
        db.collection('users')
            .doc(this.props.match.params.email)
            .get()
            .then((result) => {
                console.log(result.data().dataPassword[this.props.match.params.id]);
                this.setState({
                    url: result.data().dataPassword[this.props.match.params.id].url,
                    username: result.data().dataPassword[this.props.match.params.id].username,
                    password: result.data().dataPassword[this.props.match.params.id].password
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    render() {
        return (

            <div className="container pass-form">
                {/* <Title text="Create New Password" /> */}
                <form onSubmit={this.setData}>
                    <div className="form-group">
                        <label >URL</label>
                        <input onChange={this.setUrl} value={this.state.url} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter URL"></input>
                    </div>
                    <div className="form-group">
                        <label >Username</label>
                        <input onChange={this.setUsername} value={this.state.username} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input onChange={this.setPassword} value={this.state.password} type="password" className="form-control" placeholder="Enter Password"></input>
                    </div>
                    <Validation password={this.state.password} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPassword: (data, email) => {
            dispatch(createNewPassword(data, email))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditForm)