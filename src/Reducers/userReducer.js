

const initialState = {
    usercreated: false,
    logged_in: false,
    errormsg: "",
    current_user: {},
    users: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                // usercreated: true,
                errormsg: action.errormsg
            }
        case 'FAILED':
            return state
        case 'SIGN_IN':
            return {
                ...state,
                logged_in: true,
                current_user: action.current_user,
                errormsg: action.errormsg
            }
        case 'SIGN_OUT':
            return state
        case 'EDIT':
            return {
                ...state,
                current_user: action.current_user
            }
        case "USERS":
            return {
                ...state,
                users: action.users
            }
        case 'DELETE':
            return state
        default:
            return state
    }
}
export default userReducer