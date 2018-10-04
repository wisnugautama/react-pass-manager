// let length = /^.{6,}$/
// let lowercase = [a-z]
// let uppercase = [A-Z]
// let digit = /\d/
// let symbol = /_|[^\w]/

import React, { Fragment } from 'react'

class Validation extends React.Component {
    constructor() {
        super()
        this.state = {
            style: "text-danger",
            disable: true
        }

    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (this.props.password !== prevProps.password) {
            let isLength = this.lengthPasswordValidation() 
            let isLower = this.lowercasePasswordValidation()
            let isUpper = this.uppercasePasswordValidation()
            let isNumber = this.digitPasswordValidation()
            let isChar = this.charPasswordValidation()
            if (isLength && isLower && isUpper && isNumber && isChar) {
                this.setState({
                    disable: false
                })
            } else {
                this.setState({
                    disable: true
                })
            }
        }
    }

    lengthPasswordValidation = () => {
        let isLength = /^.{6,}$/.test(this.props.password)
        if (isLength) {
            return "text-success"
        } else {
            return this.state.style
        }

    }

    lowercasePasswordValidation = () => {
        let isLower = /[a-z]/.test(this.props.password)
        if (isLower) {
            return "text-success"
        }else {
            return this.state.style
        }
    }

    uppercasePasswordValidation = () => {
        let isUpper = /[A-Z]/.test(this.props.password)
        if (isUpper) {
            return "text-success"
        }else {
            return this.state.style
        }
    }

    digitPasswordValidation = () => {
        let isNumber = /\d/.test(this.props.password)
        if (isNumber) {
            return "text-success"
        }else {
            return this.state.style
        }
    }

    charPasswordValidation = () => {
        let isChar = /_|[^\w]/.test(this.props.password) 
        if (isChar) {
            return "text-success"
        }else {
            return this.state.style
        }
    }

    render() {
        return (
            <Fragment>
                <p className={this.lengthPasswordValidation()}> Password length must greater than 5 </p>
                <p className={this.lowercasePasswordValidation()}> Password must at least 1 lowercase </p>
                <p className={this.uppercasePasswordValidation()}> Password must at least 1 uppercase </p>
                <p className={this.digitPasswordValidation()}> Password must at least 1 number </p>
                <p className={this.charPasswordValidation()}> Password must at least 1 symbol </p>
                <button disabled={this.state.disable} type="submit" className="btn btn-dark">Save</button>
            </Fragment>
        )
    }
}

export default Validation