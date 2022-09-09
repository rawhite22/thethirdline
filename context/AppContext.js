import { createContext, useEffect, useReducer } from 'react'

export const AppContext = createContext()
export const AppContextReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGING':
      return { ...state, routeChange: true }
    case 'CHANGED':
      return { ...state, routeChange: false }
    case 'ADD_TO_COMPARE':
      return {
        ...state,
        playerCompare: [...state.playerCompare, action.payload],
      }
    case 'REMOVE_FROM_COMPARE':
      const selected = state.playerCompare.filter((id) => id !== action.payload)

      return { ...state, playerCompare: selected }
    default:
      return state
  }
}
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppContextReducer, {
    routeChange: false,
    playerCompare: [],
  })
  useEffect(() => {}, [])
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
