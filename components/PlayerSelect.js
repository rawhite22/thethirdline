import Link from 'next/link'

function PlayerSelect({ player, code }) {
  return (
    <div>
      <p>{player.person.fullName}</p>
      <Link href={`${code}/${player.person.id}`}>Player Page</Link>
    </div>
  )
}
export default PlayerSelect
