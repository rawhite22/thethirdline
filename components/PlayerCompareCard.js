import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/pro-light-svg-icons'

function PlayerCompareCard({ info, stats, scoring }) {
  console.log(scoring)
  const fpgArr = [
    stats.goals / stats.games,
    stats.assists / stats.games,
    stats.shots / stats.games,
    stats.hits / stats.games,
    stats.blocked / stats.games,
    stats.pim / stats.games,
    stats.powerPlayPoints / stats.games,
    stats.shortHandedPoints / stats.games,
    stats.plusMinus / stats.games,
  ]
  function fantasyPoints(g, a, sh, h, b, p, pp, shp, pm) {
    let goals = Number((g * scoring.goal).toFixed(2))
    let assists = Number((a * scoring.assist).toFixed(2))
    let shots = Number((sh * scoring.shot).toFixed(2))
    let hits = Number((h * scoring.hit).toFixed(2))
    let blocks = Number((b * scoring.block).toFixed(2))
    let pims = Number((p * scoring.pim).toFixed(2))
    let powerplaypoint = Number((pp * scoring.ppp).toFixed(2))
    let shorthandedpoint = Number((shp * scoring.shp).toFixed(2))
    let plusminus = Number((pm * scoring.plusMinus).toFixed(2))
    let totalArr = [
      goals,
      assists,
      shots,
      hits,
      blocks,
      pims,
      powerplaypoint,
      shorthandedpoint,
      plusminus,
    ]
    let total = totalArr.reduce((prev, curr) => prev + curr, 0)
    return total.toFixed(2)
  }
  const [show, setShow] = useState(false)
  const [fpgScore, setFpgScore] = useState(fantasyPoints(...fpgArr))
  const perGame = (statLine) => {
    if (statLine !== Number) {
      let n = Number(statLine.toFixed(2))
      return (statLine / stats.games).toFixed(2)
    }
    return (statLine / stats.games).toFixed(2)
  }

  useEffect(() => {
    setFpgScore(fantasyPoints(...fpgArr))
  }, [scoring])
  return (
    <div className='compare-card'>
      <FontAwesomeIcon
        onClick={() => setShow((prevState) => !prevState)}
        icon={faEyeSlash}
      />{' '}
      {!show ? 'Show' : 'Hide'} Player Name
      <div className='info'>
        <div className={show ? 'glass show' : 'glass'}></div>
        <h3>{info.fullName}</h3>
      </div>
      <div className='stats'>
        <h4>Per game average last season</h4>
        <h5>{stats.games} out of 82 games</h5>
        <p>Goals: {perGame(stats.goals)}</p>
        <p>Assists: {perGame(stats.assists)}</p>
        <p>Points: {perGame(stats.points)}</p>
        <p>Power Play Points: {perGame(stats.powerPlayPoints)}</p>
        <p>Short Handed Points: {perGame(stats.shortHandedPoints)}</p>
        <p>Shots: {perGame(stats.shots)}</p>
        <p>Blocks: {perGame(stats.blocked)}</p>
        <p>Hits: {perGame(stats.hits)}</p>
        <p>Penalty Minutes: {perGame(stats.pim)}</p>
        <h5>Fantasy Points: {fpgScore}</h5>
      </div>
    </div>
  )
}
export default PlayerCompareCard
