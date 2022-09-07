import Image from 'next/image'
import Link from 'next/link'
function TeamSelectTeam({ team, index }) {
  console.log((index + 1) % 2)
  return (
    <div
      className={
        (index + 1) % 2 ? 'team-select-team' : 'team-select-team even'
      }>
      <h2>{team.name}</h2>
      <div className='img-container'>
        <Image src={`/${team.id}.png`} height={100} width={140} />
      </div>
      <Link href={`/${team.teamCode}`}>Team Page</Link>
    </div>
  )
}
export default TeamSelectTeam
