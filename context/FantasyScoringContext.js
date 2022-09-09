import { createContext, useEffect, useReducer } from 'react'

export const FantasyScoring = createContext()
export const FantasyScoringReducer = (state, action) => {
  switch (action.type) {
    case 'Updated Scoring':
      return { ...state, scoring: action.payload }

    default:
      return state
  }
}
export const FantasyScoringProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FantasyScoringReducer, {
    scoring: {
      goal: 8.5,
      assist: 5,
      shot: 1.5,
      hit: 0,
      block: 1.3,
      pim: 0,
      ppp: 0,
      shp: 2,
      plusMinus: 0,
    },
  })
  useEffect(() => {}, [])
  return (
    <FantasyScoring.Provider value={{ ...state, dispatch }}>
      {children}
    </FantasyScoring.Provider>
  )
}
