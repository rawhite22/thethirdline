import { FantasyScoring } from '../context/FantasyScoringContext'
import { useContext } from 'react'

export const useFantasyScoringContext = () => {
  const context = useContext(FantasyScoring)
  if (!context) {
    throw new Error(
      'use[contextName]Context must be used inside an [contextName]ContextProvider'
    )
  }
  return context
}
