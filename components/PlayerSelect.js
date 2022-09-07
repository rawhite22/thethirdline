import Link from 'next/link'

function PlayerSelect({ player, code, index }) {
  return (
    <div
      className={
        (index + 1) % 2
          ? 'player-select-container'
          : 'player-select-container odd'
      }>
      <p>{player.person.fullName}</p>
      <Link href={`${code}/${player.person.id}`}>Stats & Info</Link>
    </div>
  )
}
export default PlayerSelect
