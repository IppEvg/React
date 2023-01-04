export const ADD_ARTICLES = 'ADD_ARTICLES'
export const ADD_ERROR = 'ADD_ERROR'
export const ADD_LOADING = 'ADD_LOADING'


export const addArticles = (data) => ({
    type: ADD_ARTICLES,
    payload: data
})
export const addError = (error) => ({
    type: ADD_ERROR,
    payload: error
})
export const addLoading = (loading) => ({
    type: ADD_LOADING,
    payload: loading
})
export const addArticlesWithReply = (data) => (dispatch) => {

    dispatch(addArticles(data))

    // dispatch(addArticles(data))
}
