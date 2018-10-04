const initialStatePassword = {
    error: undefined,
    loading: false,
    dataPassword: {}
}

const createPassword = (state = initialStatePassword, action) => {
    switch(action.type) {
        case 'POST_INPUT_REQUEST':
            return {
                ...state,
                error: undefined,
                loading: true
            }
        case 'POST_INPUT_SUCCESS':
            return {
                ...state,
                error: undefined,
                loading: false
            }
        case 'POST_INPUT_FAILED':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'GET_PASSWORD_REQUEST':
            return {
                ...state,
                error: undefined,
                loading: true,
                dataPassword: {}
            }
        case 'GET_PASSWORD_SUCCESS':
            return {
                error: undefined,
                loading: false,
                dataPassword: action.payload
            }
        case 'GET_PASSWORD_FAILED':
            return {
                error: action.payload,
                loading: false,
                dataPassword: {}
            }
        default:
            return state
    }
}

export default createPassword