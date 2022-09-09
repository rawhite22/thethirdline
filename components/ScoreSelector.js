import { useState, useEffect } from 'react'

function ScoreSelector({ setScoringSettings, title }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    switch (title) {
      case 'Goals':
        setScoringSettings((prevState) => ({ ...prevState, goals: Number(n) }))
        break
      case 'Assists':
        setScoringSettings((prevState) => ({
          ...prevState,
          assists: Number(n),
        }))
        break
      case 'Shots':
        setScoringSettings((prevState) => ({ ...prevState, shots: Number(n) }))
        break
      case 'Hits':
        setScoringSettings((prevState) => ({ ...prevState, hits: Number(n) }))
        break
      case 'Blocks':
        setScoringSettings((prevState) => ({ ...prevState, blocks: Number(n) }))
        break
      case 'Pims':
        setScoringSettings((prevState) => ({ ...prevState, pims: Number(n) }))
        break
      case 'PPP':
        setScoringSettings((prevState) => ({ ...prevState, ppp: Number(n) }))
        break
      case 'SHP':
        setScoringSettings((prevState) => ({ ...prevState, shp: Number(n) }))
        break
      case '+ / -':
        setScoringSettings((prevState) => ({
          ...prevState,
          plusMinus: Number(n),
        }))
        break

      default:
        break
    }
  }, [n])
  return (
    <div className='score-input'>
      <p onClick={() => setN(n - 1)}>-</p>
      <input type='text' onChange={(e) => setN(e.target.value)} value={n} />
      <p onClick={() => setN(n + 1)}>+</p>
    </div>
  )
}
export default ScoreSelector
