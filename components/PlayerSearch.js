import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHockeyMask } from '@fortawesome/pro-light-svg-icons'
import PlayerSearchLoading from './PlayerSearchLoading'

function PlayerSearch({ setIsOpen }) {
  const [player, setPlayer] = useState('')
  const [allPlayers, setAllPlayers] = useState(null)
  const [filteredList, setFilteredList] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const getData = async () => {
      const allPlayersRes = await axios.get(process.env.NEXT_PUBLIC_SEARCH)
      const allPlayers = allPlayersRes.data
      setAllPlayers(allPlayers)
      setLoading(false)
    }
    getData()
  }, [])
  useEffect(() => {
    if (player.length === 0) {
      setFilteredList([])
    }
  }, [player])
  const handleChange = (e) => {
    const val = e.target.value.toLowerCase()
    if (val.length < 3) {
      setPlayer(val)
    } else {
      setPlayer(val)
      setFilteredList(
        allPlayers.filter((playerObj) => playerObj.player.includes(val))
      )
    }
  }

  return (
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='search'>
      <div className='search-container'>
        <button className='exit-button' onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faCircleXmark} className='exit-button-icon' />
        </button>
        {loading && <PlayerSearchLoading />}
        {allPlayers && (
          <div className='input-group'>
            <span>
              <FontAwesomeIcon
                className='input-group-icon'
                icon={faHockeyMask}
              />
            </span>
            <input
              className='search-input'
              id='player'
              name='player'
              type='search'
              value={player}
              placeholder='Adam Fox'
              onChange={(e) => handleChange(e)}
            />
            <div className='underline'></div>
          </div>
        )}
        {filteredList && (
          <div className='player-list'>
            {filteredList.map((player) => (
              <button
                key={player.playerId}
                onClick={() => {
                  setIsOpen(false)
                  router.push(`/${player.team}/${player.playerId}`)
                }}>
                <p>{player.player}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
export default PlayerSearch
