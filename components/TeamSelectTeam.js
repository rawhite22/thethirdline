import Image from 'next/image'
function TeamSelectTeam({ team }) {
  return (
    <div className='team-select-team'>
      <h2>{team.name}</h2>
      <div>
        <Image src={`/${team.id}.png`} height={100} width={140} />
      </div>
    </div>
  )
}
export default TeamSelectTeam
