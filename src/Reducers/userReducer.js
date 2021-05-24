

const initialState = {
    usercreated: false,
    logged_in: false,
    errormsg: "",
    current_user: {}
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
            return {
              ...state,
              usercreated: false,
              logged_in: false,
            }
        case 'EDIT':
            return {
                ...state,
                current_user: action.current_user
            }
        case 'DELETE':
            return initialState
        default:
            return state
    }
}
export default userReducer