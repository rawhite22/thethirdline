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
      goal: 5,
      assist: 3,
      shot: 0.3,
      hit: 0.3,
      block: 0.3,
      pim: 1,
      ppp: 1,
      shp: 3,
      plusMinus: 1,
    },
  })
  useEffect(() => {}, [])
  return (
    <FantasyScoring.Provider value={{ ...state, dispatch }}>
      {children}
    </FantasyScoring.Provider>
  )
}
