import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ClientOnlyPortal from '../components/ClientOnlyPortal'
import PlayerSearch from '../components/PlayerSearch'
function Header() {
  const [open, setIsOpen] = useState(false)
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
      }}>
      {' '}
      <Link style={{ cursor: 'pointer' }} href='/'>
        <p>The Third Line</p>
      </Link>
      <button onClick={() => setIsOpen(true)}>Seach for Player</button>
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
