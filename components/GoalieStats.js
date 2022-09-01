function GoalieStats({ stats }) {
  console.log(stats)
  if (stats.length < 1) {
    return (
      <section className='playerstats-container'>
        <p>Player Stats are not available for this player</p>
      </section>
    )
  }
  return (
    <section className='playerstats-container'>
      <h3>Games</h3>
      <p>Games played: {stats.games}</p>
      <p>Games started: {stats.gamesStarted}</p>
      <p>Wins: {stats.wins}</p>
      <p>Losses: {stats.losses}</p>
      <p>Overtime: {stats.ot}</p>
      <h3>Stats</h3>
      <p>Goals against average: {stats.goalAgainstAverage.toFixed(2)}</p>
      <p>Shots against total: {stats.shotsAgainst}</p>
      <p>Goals against total: {stats.goalsAgainst}</p>
      <p>
        Short handed save percentage: {stats.powerPlaySavePercentage.toFixed(1)}
      </p>
    </section>
  )
}
export default GoalieStats
