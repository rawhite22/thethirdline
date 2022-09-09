import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(
      'useThemeContext must be used inside an ThemeContextProvider'
    )
  }
  return context
}
