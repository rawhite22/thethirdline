// component state
import { useState } from 'react'
// utils
import { getTeams } from '../utils/getData'
// animations
import PageTransistion from '../components/PageTransition'
import DivisionSelect from '../components/DivisionSelect'
import TeamSelect from '../components/TeamSelect'

export default function Home({ teams }) {
  const [filteredTeams, setFilteredTeams] = useState(teams)

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
