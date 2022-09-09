import { useState } from 'react'
import ScoreSelector from './ScoreSelector'

function Category({ title, setScoringSettings }) {
  return (
    <div className='category'>
      <h5>{title}</h5>
      <ScoreSelector title={title} setScoringSettings={setScoringSettings} />
    </div>
  )
}

function ScoringSettings({ updateScoring }) {
  const handleUpdateScoring = () => {
    updateScoring({ type: 'Updated Scoring', payload: scoringSettings })
  }
  const [scoringSettings, setScoringSettings] = useState({
    goals: 0,
    assists: 0,
    shots: 0,
    blocks: 0,
    pims: 0,
    ppp: 0,
    shp: 0,
    plusMinus: 0,
  })
  return (
    <>
      <div className='scoring-settings'>
        <Category setScoringSettings={setScoringSettings} title={'Goals'} />
        <Category setScoringSettings={setScoringSettings} title={'Assists'} />
        <Category setScoringSettings={setScoringSettings} title={'Shots'} />
        <Category setScoringSettings={setScoringSettings} title={'Hits'} />
        <Category setScoringSettings={setScoringSettings} title={'Blocks'} />
        <Category setScoringSettings={setScoringSettings} title={'Pims'} />
        <Category setScoringSettings={setScoringSettings} title={'PPP'} />
        <Category setScoringSettings={setScoringSettings} title={'SHP'} />
        <Category setScoringSettings={setScoringSettings} title={'+ / -'} />
      </div>
      <p onClick={() => handleUpdateScoring()}>Set Scoring</p>
    </>
  )
}
export default ScoringSettings
