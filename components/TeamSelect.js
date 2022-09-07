import TeamSelectTeam from './TeamSelectTeam'

function TeamSelect({ teams }) {
  return (
    <section className='team-select'>
      {teams.map((team, index) => (
        <TeamSelectTeam key={team.id} team={team} index={index} />
      ))}
    </section>
  )
}
export default TeamSelect
