import RosterFilter from './RosterFilter'
import { useState } from 'react'
import PlayerSelect from './PlayerSelect'

function TeamRoster({ roster, code }) {
  const [filteredRoster, setFilteredRoster] = useState(roster)
  return (
    <section className='teamcode_roster'>
      <RosterFilter roster={roster} setFilteredRoster={setFilteredRoster} />
      {filteredRoster.map((player) => (
        <PlayerSelect key={player.person.id} player={player} code={code} />
      ))}
    </section>
  )
}
export default TeamRoster
