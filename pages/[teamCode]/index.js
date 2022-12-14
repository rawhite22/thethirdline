import PageTransistion from '../../components/PageTransition'
import TeamInfo from '../../components/TeamInfo'
import TeamRoster from '../../components/TeamRoster'
import TeamStats from '../../components/TeamStats'
import { getTeams, getTeamRoster } from '../../utils/getData'
import useHandleRouteChange from '../../hooks/useHandleRouteChange'
import { useAppContext } from '../../hooks/useAppContext'
function TeamPage({ data }) {
  const { dispatch } = useAppContext()
  const { query } = useHandleRouteChange(dispatch)

  return (
    <PageTransistion>
      <TeamInfo info={data.teaminfo} />
      <TeamStats stats={data.teamstats} />
      <TeamRoster roster={data.teamroster} code={query.teamCode} />
    </PageTransistion>
  )
}
export default TeamPage

export async function getServerSideProps(context) {
  const code = context.params.teamCode
  const data = await getTeamRoster(code)
  const { teams, teamsError } = await getTeams()
  const paramCheck = teams.filter((team) => code === team.teamCode)
  if (paramCheck.length < 1 || data.teamError || teamsError) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  }
}
