import Accordian from './Accordian'
import { useState } from 'react'
function DivisionSelect({ filter, teams }) {
  const [showFilterOptions, setShowFilterOptions] = useState({
    visible: false,
    rotation: 0,
  })
  const handleTeamsFilter = (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'Metro':
        filter(teams.filter((team) => team.division === 'Metropolitan'))
        setShowFilterOptions((prevState) => ({
          visible: !prevState.visible,
          rotation: prevState.rotation + 180,
        }))
        break
      case 'Atlantic':
        filter(teams.filter((team) => team.division === 'Atlantic'))
        setShowFilterOptions((prevState) => ({
          visible: !prevState.visible,
          rotation: prevState.rotation + 180,
        }))
        break
      case 'Central':
        filter(teams.filter((team) => team.division === 'Central'))
        setShowFilterOptions((prevState) => ({
          visible: !prevState.visible,
          rotation: prevState.rotation + 180,
        }))
        break
      case 'Pacific':
        filter(teams.filter((team) => team.division === 'Pacific'))
        setShowFilterOptions((prevState) => ({
          visible: !prevState.visible,
          rotation: prevState.rotation + 180,
        }))
        break
      case 'NHL':
        filter(teams)
        setShowFilterOptions((prevState) => ({
          visible: !prevState.visible,
          rotation: prevState.rotation + 180,
        }))
      default:
        break
    }
  }
  const handleShow = () => {
    setShowFilterOptions((prevState) => ({
      visible: !prevState.visible,
      rotation: prevState.rotation + 180,
    }))
  }
  return (
    <Accordian
      title='Division Select'
      show={showFilterOptions.visible}
      setShow={handleShow}
      rotation={showFilterOptions.rotation}>
      <section className='division-filter'>
        <button
          className='btn_division-select'
          onClick={(e) => handleTeamsFilter(e)}
          id='Metro'>
          Metro
        </button>
        <button
          className='btn_division-select'
          onClick={(e) => handleTeamsFilter(e)}
          id='Atlantic'>
          Atlantic
        </button>
        <button
          className='btn_division-select'
          onClick={(e) => handleTeamsFilter(e)}
          id='Central'>
          Central
        </button>
        <button
          className='btn_division-select'
          onClick={(e) => handleTeamsFilter(e)}
          id='Pacific'>
          Pacific
        </button>

        <button
          className='btn_division-select'
          onClick={(e) => handleTeamsFilter(e)}
          id='NHL'>
          NHL
        </button>
      </section>
    </Accordian>
  )
}
export default DivisionSelect
