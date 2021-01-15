const SET_USER = "SET_USER"
const EXIT_USER = "EXIT_USER"

const defaultState ={
  currentUser:{},
  isAuth:false
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {
      case SET_USER:
          return {
              ...state,
              currentUser: action.payload,
              isAuth: true
          }
      case EXIT_USER:
          return{
              ...state,
              currentUser: "",
              isAuth: false
      }
  default:
    return state
  }
}

export const setUser = user =>({type: SET_USER, payload: user})
export const exitUser = () => ({type: EXIT_USER})
export default userReducer


