import { useRouter } from 'next/router'
import { useAppContext } from '../hooks/useAppContext'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ClientOnlyPortal from '../components/ClientOnlyPortal'
import PlayerSearch from '../components/PlayerSearch'
function Header() {
  const { push } = useRouter()
  const [open, setIsOpen] = useState(false)
  const { playerCompare } = useAppContext()
  const handleCompare = () => {
    push('/compare')
  }
  const checkLength = (length) => {
    if (length > 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <header className='app-header'>
      {' '}
      <Link style={{ cursor: 'pointer' }} href='/'>
        <h1>The Third Line.</h1>
      </Link>
      <nav>
        <button onClick={() => setIsOpen(true)}>Player Search</button>
        <button
          disabled={checkLength(playerCompare.length)}
          onClick={() => handleCompare()}>
          {playerCompare.length > 1
            ? `Compare (${playerCompare.length})`
            : 'Select Players'}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <ClientOnlyPortal selector='#player-search'>
            <PlayerSearch setIsOpen={setIsOpen} />
          </ClientOnlyPortal>
        )}
      </AnimatePresence>
    </header>
  )
}
export default Header
