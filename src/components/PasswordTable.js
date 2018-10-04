import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllPassword, createNewPassword } from '../actions/passManager';
import Title from '../components/Title';
import db from '../firebase';
import { Link } from 'react-router-dom';

class PasswordTable extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            email: ''
        }
    }
    componentDidMount() {
        this.getDataPassword()
    }

    getDataPassword = () => {
        db.settings({
            timestampsInSnapshots: true
        })

        db.collection('users')
            .doc(this.props.dataUser.email)
            .onSnapshot((result) => {
                this.setState({
                    data: result.data().dataPassword,
                    email: result.data().email
                })
            })
    }

    deletePassword = (event) => {
        console.log(event);
        db.settings({
            timestampsInSnapshots: true
        })

        db.collection('users')
            .doc(this.props.dataUser.email)
            .get()
            .then((result) => {
                console.log('huhu', result.data().dataPassword[event]);
                console.log(this.props.dataUser.username);
                let newData = result.data().dataPassword.splice(event, 1)
                let newState = {
                    username: this.props.dataUser.username,
                    password: this.props.dataUser.password,
                    email: this.props.dataUser.email,
                    dataPassword: newData
                }
                this.props.createPassword(newState,this.props.dataUser.email)
            })
            .catch((err) => {
                console.log(err.response);
            })


    }

    render() {
        return (
            <Fragment>
                <Title text="List of Password" />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>No</th>
                            <th>URL</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((pass, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td> {pass.url} </td>
                                        <td> {pass.username} </td>
                                        <td> {pass.password} </td>
                                        <td> sekarang </td>
                                        <td> sekarang </td>
                                        <td>
                                            <Link to={`/edit/${this.props.dataUser.email}/${index}`}>Edit</Link>
                                            {/* <form > */}
                                            <button onClick={() => { this.deletePassword(index) }} className="btn btn-dark">Delete</button>
                                            {/* </form> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPassword: (email) => {
            dispatch(getAllPassword(email))
        },
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordTable)