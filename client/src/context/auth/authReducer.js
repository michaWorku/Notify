export const authReducer  = (state, action)=>{
    switch (action.type) {
        case 'LOGIN': {
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                currentUser: action.payload
            }
        }
            
        case 'LOGOUT':{
            localStorage.removeItem('user')
            return {
                currentUser : null
            }
        }   

        default:
            return state
    }
}