import { useState, useEffect } from 'react'

function ScoreSelector({ setScoringSettings, title }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    switch (title) {
      case 'Goals':
        setScoringSettings((prevState) => ({ ...prevState, goal: Number(n) }))
        break
      case 'Assists':
        setScoringSettings((prevState) => ({
          ...prevState,
          assist: Number(n),
        }))
        break
      case 'Shots':
        setScoringSettings((prevState) => ({ ...prevState, shot: Number(n) }))
        break
      case 'Hits':
        setScoringSettings((prevState) => ({ ...prevState, hit: Number(n) }))
        break
      case 'Blocks':
        setScoringSettings((prevState) => ({ ...prevState, block: Number(n) }))
        break
      case 'Pims':
        setScoringSettings((prevState) => ({ ...prevState, pim: Number(n) }))
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
      <input
        type='number'
        step='0.1'
        onChange={(e) => setN(e.target.value)}
        value={n}
      />
      <p onClick={() => setN(n + 1)}>+</p>
    </div>
  )
}
export default ScoreSelector
