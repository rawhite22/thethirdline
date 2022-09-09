import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseyeArrow } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAppContext } from '../hooks/useAppContext'

function PlayerSelect({ player, code, index }) {
  const { playerCompare, dispatch } = useAppContext()
  const [selected, setSelected] = useState(
    playerCompare.includes(player.person.id)
  )
  const handleCompare = async (id, selected) => {
    switch (selected) {
      case true:
        setSelected(false)
        dispatch({ type: 'REMOVE_FROM_COMPARE', payload: id })
        return
      case false:
        setSelected(true)
        dispatch({ type: 'ADD_TO_COMPARE', payload: id })

        return
      default:
        return
    }
  }

  return (
    <div
      className={
        (index + 1) % 2
          ? 'player-select-container'
          : 'player-select-container odd'
      }>
      <p>{player.person.fullName}</p>
      <nav>
        <FontAwesomeIcon
          onClick={() => handleCompare(player.person.id, selected)}
          className={selected ? 'compare-icon selected' : 'compare-icon'}
          icon={faBullseyeArrow}
        />
        <Link href={`${code}/${player.person.id}`}>Stats & Info</Link>
      </nav>{' '}
    </div>
  )
}
export default PlayerSelect
