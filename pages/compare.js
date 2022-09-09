import PageTransistion from '../components/PageTransition'
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'

import useHandleRouteChange from '../hooks/useHandleRouteChange'
import PlayerCompareCard from '../components/PlayerCompareCard'
import ScoringSettings from '../components/ScoringSettings'
import { useFantasyScoringContext } from '../hooks/useFantasyScoring'

function Compare() {
  const { dispatch, playerCompare } = useAppContext()
  const { push } = useHandleRouteChange(dispatch)
  const [compareData, setCompareData] = useState(null)
  const { dispatch: scoringDispatch, scoring } = useFantasyScoringContext()
  useEffect(() => {
    if (playerCompare.length === 0) {
      push('/')
    }
    const getData = async () => {
      playerCompare.forEach(async (id) => {
        const response = await fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
        )
        const data = await response.json()

        const responseInfo = await fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}`
        )
        const dataInfo = await responseInfo.json()
        if (data.stats[0].splits.length === 0) {
          const player = {
            info: dataInfo.people[0],
            stats: null,
          }
          setCompareData((prevState) => {
            if (prevState === null) {
              return [player]
            } else {
              return [...prevState, player]
            }
          })
        } else {
          const player = {
            info: dataInfo.people[0],
            stats: data.stats[0].splits[0].stat,
          }
          setCompareData((prevState) => {
            if (prevState === null) {
              return [player]
            } else {
              return [...prevState, player]
            }
          })
        }
      })
    }
    if (playerCompare.length > 1) {
      getData()
    }
  }, [playerCompare])

  return (
    <PageTransistion>
      <section className='compare'>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPARE' })}>
          Clear List
        </button>
        <h3>Custom Scoring Options</h3>
        <ScoringSettings updateScoring={scoringDispatch} />
        <div className='player-compare'>
          {compareData &&
            compareData.map((player) => (
              <PlayerCompareCard
                stats={player.stats}
                info={player.info}
                scoring={scoring}
              />
            ))}
        </div>
      </section>
    </PageTransistion>
  )
}
export default Compare
