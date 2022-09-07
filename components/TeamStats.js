import Accordian from './Accordian'
import { useState } from 'react'

const initialState = {
  teamperformance: {
    show: false,
    rotation: 0,
  },
  teamscoring: {
    show: false,
    rotation: 0,
  },
  teamdefense: {
    show: false,
    rotation: 0,
  },
}

function TeamStats({ stats }) {
  const [showStats, setShowStats] = useState(initialState)
  const handleShow = (category) => {
    setShowStats((prevState) => ({
      ...prevState,
      [category]: {
        show: !prevState[category].show,
        rotation: prevState[category].rotation + 180,
      },
    }))
  }
  return (
    <section className='teamcode_team-stats'>
      <Accordian
        title='Performance'
        show={showStats.teamperformance.show}
        rotation={showStats.teamperformance.rotation}
        setShow={() => handleShow('teamperformance')}>
        <div className='stats-container'>
          <p>Wins: {stats.wins}</p>
          <p>Losses: {stats.losses}</p>
          <p>Wins when leading after the first: {stats.winLeadFirstPer}</p>
          <p>Wins when leading after the second: {stats.winLeadSecondPer}</p>
          <p>Wins when scoring the first goal: {stats.winScoreFirst}</p>
          <p>Wins when outshooting the opponent: {stats.winOutshootOpp}</p>
          <p>Wins when out shot by the opponent: {stats.winOutshotByOpp}</p>
        </div>
      </Accordian>
      <Accordian
        title='Scoring'
        show={showStats.teamscoring.show}
        rotation={showStats.teamscoring.rotation}
        setShow={() => handleShow('teamscoring')}>
        <div className='stats-container'>
          <p>Goals per game: {stats.goalsPerGame}</p>
          <p>Shots per game: {stats.shotsPerGame}</p>
          <p>Team shooting percentage: {stats.shootingPctRank}</p>
          <p>Power play percentage: {stats.powerPlayPercentage}</p>
          <p>Power play opportunities: {stats.powerPlayOpportunities}</p>
        </div>
      </Accordian>
      <Accordian
        title='Defense'
        show={showStats.teamdefense.show}
        rotation={showStats.teamdefense.rotation}
        setShow={() => handleShow('teamdefense')}>
        <div className='stats-container'>
          <p>Goals against per game: {stats.goalsAgainstPerGame}</p>
          <p>Shots against per game: {stats.shotsAllowed}</p>
          <p>Team save percentage: {stats.savePctRank}</p>
          <p>Penalty kill percentage: {stats.penaltyKillPercentage}</p>
          <p>Penalty Kill opportunities: {stats.penaltyKillOpportunities}</p>
        </div>
      </Accordian>
    </section>
  )
}
export default TeamStats
