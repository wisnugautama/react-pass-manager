import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    logout = () => {
        this.props.logoutYU()
        alert('account has been Logged Out')
    }
    render() {
        return (
            <ul className="nav justify-content-center">
                {
                    this.props.dataUser.isLogin == false ? (
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/user">Login</Link>
                            </li>
                        </Fragment>
                    ) : (
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/password">Password Manager</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link onClick={this.logout} className="nav-link active" to="/">Logout</Link>
                                </li>
                                <li className="nav-item">
                                <span>Hi! { this.props.dataUser.username }</span>
                                </li>
                            </Fragment>
                        )
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.User
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutYU: () => {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)