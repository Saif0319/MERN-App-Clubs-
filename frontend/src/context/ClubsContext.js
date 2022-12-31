import { createContext, useReducer } from 'react'

export const ClubsContext = createContext()

export const clubsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLUBS':
      return { 
        clubs: action.payload 
      }
    case 'CREATE_CLUB':
      return { 
        clubs: [action.payload, ...state.clubs] 
      }
    case 'DELETE_CLUB':
      return {
        clubs: state.clubs.filter(club => club._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ClubsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clubsReducer, { 
    clubs: null
  })
  
  return (
    <ClubsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ClubsContext.Provider>
  )
}