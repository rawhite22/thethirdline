export default async function handler(req, res) {
  try {
    const teamRes = await fetch(
      'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster'
    )
    const teamData = await teamRes.json()
    const filteredTeamData = teamData.teams.map((team) => {
      return {
        team: team.abbreviation,
        teamId: team.id,
        roster: team.roster.roster,
      }
    })
    const searchData = []
    filteredTeamData.forEach((team) => {
      team.roster.forEach((player) => {
        searchData.push({
          team: team.team,
          player: player.person.fullName.toLowerCase(),
          playerId: player.person.id,
        })
      })
    })
    res.status(200).json(searchData)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
