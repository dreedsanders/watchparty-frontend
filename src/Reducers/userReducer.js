

const initialState = {
    usercreated: false,
    logged_in: false,
    errormsg: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                usercreated: true
            }
        case 'SIGN_IN':
            return {
                ...state,
                logged_in: true
            }
        case 'SIGN_OUT':
            return {
              ...state,
              usercreated: false,
              logged_in: false,
            };
        default:
            return state
    }
}
export default userReducer