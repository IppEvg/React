
 const initialState = {
    useProfile:0
}

export const profileReducer=(state=initialState,action)=>{


    const {type,payload}=action
    switch(type){
        case 'CHANGE_CHECKBOX':
            return{
                ...state,
                useProfile:!payload
            }
            default:
                return state
        }
            }
    
