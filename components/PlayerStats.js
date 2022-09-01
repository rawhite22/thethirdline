function PlayerStats({ stats }) {
  if (stats.length < 1) {
    return (
      <section className='playerstats-container'>
        <p>Player Stats are not available for this player</p>
      </section>
    )
  }
  return (
    <section className='playerstats-container'>
      <h3>Time on ice pergame averages</h3>
      <p>Games played: {stats.games}</p>
      <p>All situations: {stats.timeOnIcePerGame}</p>
      <p>Evenstrength: {stats.evenTimeOnIcePerGame}</p>
      <p>Powerplay: {stats.powerPlayTimeOnIcePerGame}</p>
      <p>Shorthanded: {stats.shortHandedTimeOnIcePerGame}</p>
      <h3>Scoring</h3>
      <p>Goals: {stats.goals}</p>
      <p>Assists: {stats.assists}</p>
      <p>Points: {stats.points}</p>
      <p>Game winning goals: {stats.gameWinningGoals}</p>
      <p>Power play goals: {stats.powerPlayGoals}</p>
      <p>Power play points: {stats.powerPlayPoints}</p>
      <p>Shorthanded goals: {stats.shortHandedGoals}</p>
      <p>Shorthanded points: {stats.shortHandedPoints}</p>
      <h3>Other Stats</h3>
      <p>Shots: {stats.shots}</p>
      <p>Blocks: {stats.blocked}</p>
      <p>Hits: {stats.hits}</p>
      <p>Shooting percentage: {stats.shotPct}</p>
      <p>Penalty minutes: {stats.pim}</p>
      <p>Plus / Minus: {stats.plusMinus}</p>
      <p>{}</p>
    </section>
  )
}
export default PlayerStats
