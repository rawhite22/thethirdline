function RosterFilter({ roster, setFilteredRoster }) {
  const handleRosterFilter = (e) => {
    switch (e.target.id) {
      case 'F':
        setFilteredRoster(
          roster.filter((player) => player.position.type === 'Forward')
        )
        break
      case 'D':
        setFilteredRoster(
          roster.filter((player) => player.position.type === 'Defenseman')
        )
        break
      case 'G':
        setFilteredRoster(
          roster.filter((player) => player.position.type === 'Goalie')
        )
        break
      case 'A':
        setFilteredRoster(roster)
        break
      default:
        break
    }
  }
  return (
    <div className='teamcode_roster--roster-filter'>
      <button
        className='teamcode_roster--roster-filter-btn'
        onClick={(e) => handleRosterFilter(e)}
        id='F'>
        F
      </button>
      <button
        className='teamcode_roster--roster-filter-btn'
        onClick={(e) => handleRosterFilter(e)}
        id='D'>
        D
      </button>
      <button
        className='teamcode_roster--roster-filter-btn'
        onClick={(e) => handleRosterFilter(e)}
        id='G'>
        G
      </button>
      <button
        className='teamcode_roster--roster-filter-btn'
        onClick={(e) => handleRosterFilter(e)}
        id='A'>
        All
      </button>
    </div>
  )
}
export default RosterFilter
