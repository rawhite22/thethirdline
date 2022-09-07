import TeamSelectTeam from './TeamSelectTeam'

function TeamSelect({ teams }) {
  return (
    <>
      {teams.map((team, index) => (
        <TeamSelectTeam key={team.id} team={team} index={index} />
      ))}
    </>
  )
}
export default TeamSelect
