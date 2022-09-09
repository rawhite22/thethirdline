// App level State
import { useAppContext } from '../hooks/useAppContext'
// component state
import { useState } from 'react'
// utils
import { getTeams } from '../utils/getData'
// animations
import PageTransistion from '../components/PageTransition'
import DivisionSelect from '../components/DivisionSelect'
import TeamSelect from '../components/TeamSelect'
import useHandleRouteChange from '../hooks/useHandleRouteChange'

export default function Home({ teams }) {
  const { dispatch } = useAppContext()
  const [filteredTeams, setFilteredTeams] = useState(teams)
  useHandleRouteChange(dispatch)
  return (
    <PageTransistion>
      <section className='team-select'>
        <DivisionSelect teams={teams} filter={setFilteredTeams} />
        <TeamSelect teams={filteredTeams} />
      </section>
    </PageTransistion>
  )
}

export async function getServerSideProps() {
  const { teams, teamsError } = await getTeams()
  if (teamsError) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      teams,
    },
  }
}
