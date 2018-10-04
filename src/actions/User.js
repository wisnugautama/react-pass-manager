import db from '../firebase';

export const registerUser = (input) => {
    return dispatch => {
        dispatch( { type: 'REGISTER_REQUEST' } )
        db.settings({
            timestampsInSnapshots: true
        })

        db.collection('users')
        .doc(input.email)
        .set({
            username: input.username,
            email: input.email,
            password: input.password,
            dataPassword: []
        })
        .then((result) => {
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: {
                    username: input.username,
                    email: input.email,
                    password: input.password
                }
            })
            alert('Register Success')
        })
        .catch((err) => {
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: {
                    error: err.response
                }
            })
            alert(err.response)
        })
    }
}

export const loginUser = (input) => {
    return dispatch => {
        dispatch({ type: 'LOGIN_REQUEST' })
        db.settings({
            timestampsInSnapshots: true
        })

        db.collection('users')
        .doc(input.email)
        .get()
        .then((result) => {
            // console.log('tes login', result.data());
            if (!result.data()) {
                alert('Username / Password Wrong!')
            }
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    username: result.data().username,
                    email: input.email
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: 'LOGIN_FAILED',
                payload: {
                    error: err.response
                }
            })
        })
    }
}
