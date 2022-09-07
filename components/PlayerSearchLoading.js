import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck } from '@fortawesome/pro-light-svg-icons'

function PlayerSearchLoading() {
  return (
    <main className='search-loading'>
      <FontAwesomeIcon
        beat={true}
        className='loading-icon'
        icon={faHockeyPuck}
      />
    </main>
  )
}
export default PlayerSearchLoading
