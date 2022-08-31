import TeamSelectTeam from './TeamSelectTeam'

function TeamSelect({ teams }) {
  return (
    <section className='home_teams-list'>
      {teams.map((team) => (
        <TeamSelectTeam key={team.id} team={team} />
      ))}
    </section>
  )
}
export default TeamSelect
