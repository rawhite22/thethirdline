import TeamSelectTeam from './TeamSelectTeam'

function TeamSelect({ teams }) {
  return (
    <section className='team-select'>
      {teams.map((team) => (
        <TeamSelectTeam key={team.id} team={team} />
      ))}
    </section>
  )
}
export default TeamSelect
