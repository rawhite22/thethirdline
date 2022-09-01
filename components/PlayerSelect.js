import Link from 'next/link'

function PlayerSelect({ player, code }) {
  return (
    <div className='player-select-container'>
      <p>{player.person.fullName}</p>
      <Link href={`${code}/${player.person.id}`}>Stats & Info</Link>
    </div>
  )
}
export default PlayerSelect
