import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ClientOnlyPortal from '../components/ClientOnlyPortal'
import PlayerSearch from '../components/PlayerSearch'
function Header() {
  const [open, setIsOpen] = useState(false)
  return (
    <header className='app-header'>
      {' '}
      <Link style={{ cursor: 'pointer' }} href='/'>
        <h1>The Third Line</h1>
      </Link>
      <button onClick={() => setIsOpen(true)}>Player Search</button>
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
