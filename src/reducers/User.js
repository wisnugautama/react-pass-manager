const initialStateUser = {
    username: '',
    email: '',
    password: '',
    loading: false,
    error: undefined,
    isLogin: false
}

const reducerUser = (state = initialStateUser, action) => {
    switch(action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                username: '',
                email: '',
                password: '',
                loading: true,
                error: undefined
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                loading: false,
                error: undefined,
            }
        case 'REGISTER_FAILED':
            return {
                ...state,
                username: '',
                email: '',
                password: '',
                loading: false,
                error: action.payload.error
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                username: '',
                loading: true,
                error: undefined,
                isLogin: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                loading: false,
                error: undefined,
                isLogin: true
            }
        case 'LOGIN_FAILED':    
            return {
                ...state,
                username: '',
                loading: false,
                error: action.payload.error,
                isLogin: false
            }
        case 'LOGOUT':
            return {
                ...state,
                username: '',
                loading: false,
                isLogin: false,
                error: undefined
            }
        default:
            return state
    }
}

export default reducerUser