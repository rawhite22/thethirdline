import { useState } from 'react'
import ScoreSelector from './ScoreSelector'

const statCategory = [
  'Goals',
  'Assists',
  'Shots',
  'Hits',
  'Blocks',
  'Pims',
  'PPP',
  'SHP',
  '+ / -',
]

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
    goal: 0,
    assist: 0,
    shot: 0,
    block: 0,
    pim: 0,
    ppp: 0,
    shp: 0,
    plusMinus: 0,
  })
  return (
    <>
      <div className='scoring-settings'>
        {statCategory.map((cat, index) => (
          <Category
            key={index}
            setScoringSettings={setScoringSettings}
            title={cat}
          />
        ))}
      </div>
      <p onClick={() => handleUpdateScoring()}>Set Scoring</p>
    </>
  )
}
export default ScoringSettings
