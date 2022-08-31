import axios from 'axios'
// get all teams for initial app load
export const getTeams = async () => {
  try {
    const response = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/teams'
    )
    const teams = response.data.teams.map((team) => ({
      id: team.id,
      name: team.name,
      division: team.division.name,
      teamCode: team.abbreviation,
    }))
    return { teams, teamsError: null }
  } catch (error) {
    return { teams: null, teamsError: error.message }
  }
}
// gets team info team stats and roster
export const getTeamRoster = async (code) => {
  try {
    const response = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/teams'
    )
    const teams = response.data.teams
    const team = teams.filter((team) => team.abbreviation === code)
    const teamData = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/teams/${team[0].id}?expand=team.schedule.next&expand=team.roster&expand=team.stats`
    )

    const teaminfo = {
      id: teamData.data.teams[0].id,
      name: teamData.data.teams[0].name,
      division: teamData.data.teams[0].division.name,
    }
    const teamroster = teamData.data.teams[0].roster.roster
    const teamstats = teamData.data.teams[0].teamStats[0].splits[1].stat
    return { teaminfo, teamroster, teamstats, teamError: null }
  } catch (error) {
    return {
      teaminfo: null,
      teamroster: null,
      teamstats: null,
      teamError: error.message,
    }
  }
}
// get individual player stats and info
export const getPlayer = async (id) => {
  try {
    const stats = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
    )
    const playerInfo = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${id}`
    )
    if (stats.data.stats[0].splits.length < 1) {
      return {
        stats: [],
        info: playerInfo.data.people[0],
        errorPlayer: null,
      }
    } else {
      return {
        stats: stats.data.stats[0].splits[0].stat,
        info: playerInfo.data.people[0],
        errorPlayer: null,
      }
    }
  } catch (error) {
    return {
      stats: null,
      info: null,
      errorPlayer: error.message,
    }
  }
}
// gets a list of every players id in the db and checks current player id param
// if null will redirect to 404
export const getPlayerIds = async () => {
  try {
    const teamRes = await axios.get(
      'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster'
    )
    const filteredTeamData = teamRes.data.teams.map((team) => {
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
    return { searchData, error: null }
  } catch (error) {
    return { error: error.message }
  }
}
