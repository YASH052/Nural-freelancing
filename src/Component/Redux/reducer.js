const initialState = {
    user: null,
    isAuthenticated: false,
   
};

// Reducer function
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
      
        default:
            return state;
    }
};