import Image from 'next/image'
import Link from 'next/link'
function TeamSelectTeam({ team }) {
  return (
    <div className='team-select-team'>
      <h2>{team.name}</h2>
      <div>
        <Image src={`/${team.id}.png`} height={100} width={140} />
      </div>
      <Link href={`/${team.teamCode}`}>Go To Team Page</Link>
    </div>
  )
}
export default TeamSelectTeam
