const initialState = {
    articles: [],
    loading: false,
    error: "",
}

export const articleChange = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_ARTICLES':
            return {
                ...state,
                articles: payload,
            }
        case 'ADD_ERROR':
            return {
                ...state,
                error: payload
            }
        case 'ADD_LOADING':
            return {
                ...state,
                loading: payload
            }
        default:
            return state
    }
}
