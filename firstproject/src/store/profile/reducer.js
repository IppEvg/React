
const initialState = {
    useProfile: false,
    isAuth: false
}

export const profileToggle = (state = initialState, action) => {


    const { type, payload } = action
    switch (type) {
        case 'CHANGE_CHECKBOX':
            return {
                ...state,
                useProfile: !payload,
            }
        case 'CHANGE_AUTH':
            return {
                ...state,
                isAuth: payload
            }
        default:
            return state
    }
}

