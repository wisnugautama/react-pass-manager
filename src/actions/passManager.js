import db from '../firebase';

export const createNewPassword = (input,email) => {
    console.log('masuk', input, email);
    return dispatch => {
        dispatch( { type: 'POST_INPUT_REQUEST' } )
        db.settings({
            timestampsInSnapshots: true
        });

        db.collection('users')
        .doc(email)
        .get()
        .then((result) => {
            let array = result.data().dataPassword
            let obj  = {
                url: input.url,
                username: input.username,
                password: input.password
            }
            array.push(obj)
            db.collection('users')
            .doc(email)
            .set({
               username: result.data().username,
               email: result.data().email,
               password: result.data().password,
               dataPassword: array
            })
            .then(() => {
                alert('success add new password')
            })
            .catch((err) => {
                console.log(err.response);
            })
        })
        .catch((err) => {
            console.log(err.response);
        })
    }
}

export const getAllPassword = (email) => {
    return dispatch => {
        dispatch({type: 'GET_PASSWORD_REQUEST'})
        db.settings({
            timestampsInSnapshots: true
        })

        db.collection('users')
        .doc(email)
        .get()
        .then((result) => {
            console.log('dari reducer', result.data());
            dispatch({
                type: 'GET_PASSWORD_SUCCESS',
                payload: result.data()
            })
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({
                type: 'GET_PASSWORD_FAILED',
                payload: err.response
            })
        })
    }
}
