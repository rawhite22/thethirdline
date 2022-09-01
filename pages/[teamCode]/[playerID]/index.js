import PageTransistion from '../../../components/PageTransition'
import { getPlayer, getPlayerIds } from '../../../utils/getData'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PlayerStats from '../../../components/PlayerStats'
import GoalieStats from '../../../components/GoalieStats'
function PlayerPage({ stats, info }) {
  const { query } = useRouter()
  return (
    <PageTransistion>
      <section className='playerpage_info'>
        <Link href={`/${query.teamCode}`}>Back To Team Page</Link>
        <h2>{info.fullName}</h2>
        <p>Position: {info.primaryPosition.name}</p>
        <p>Number: {info?.primaryNumber || 'number not assigned yet'}</p>
      </section>
      {info.primaryPosition.code === 'G' ? (
        <GoalieStats stats={stats} />
      ) : (
        <PlayerStats stats={stats} />
      )}
    </PageTransistion>
  )
}
export default PlayerPage

export async function getServerSideProps(context) {
  const { stats, info, errorPlayer } = await getPlayer(context.params.playerID)
  const { searchData, error } = await getPlayerIds()
  if (errorPlayer) {
    return {
      notFound: true,
    }
  }
  const paramCheck = searchData.filter(
    (playerObj) => playerObj.playerId === Number(context.params.playerID)
  )
  if (!paramCheck.length > 0) {
    return {
      notFound: true,
    }
  }
  if (!stats || !info) {
    return {
      notFound: true,
    }
  }
  return {
    props: { stats, info },
  }
}
