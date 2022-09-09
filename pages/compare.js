import PageTransistion from '../components/PageTransition'
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import useHandleRouteChange from '../hooks/useHandleRouteChange'
import PlayerCompareCard from '../components/PlayerCompareCard'
import ScoringSettings from '../components/ScoringSettings'
import { useFantasyScoringContext } from '../hooks/useFantasyScoring'

function compare() {
  const { dispatch, playerCompare } = useAppContext()
  const { query } = useHandleRouteChange(dispatch)
  const [compareData, setCompareData] = useState(null)
  const {
    dispatch: scoringDispatch,

    scoring,
  } = useFantasyScoringContext()

  useEffect(() => {
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
      })
    }
    if (playerCompare.length > 1) {
      getData()
    }
  }, [])

  return (
    <PageTransistion>
      <section className='compare'>
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
export default compare
