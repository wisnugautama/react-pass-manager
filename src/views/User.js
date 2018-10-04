import React from 'react';
import Title from '../components/Title';
import Register from '../components/RegisterForm';
import Login from '../components/LoginForm';

class User extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <Title text="Login Form" />
                        <Login />
                    </div>

                    <div className="col-md-6">
                    <Title text="Register Form" />
                        <Register />
                    </div>
                </div>
            </div>
        )
    }
}

export default User

