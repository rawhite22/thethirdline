import PageTransistion from '../../../components/PageTransition'
import { getPlayer, getPlayerIds } from '../../../utils/getData'

import Link from 'next/link'
import PlayerStats from '../../../components/PlayerStats'
import GoalieStats from '../../../components/GoalieStats'
import Image from 'next/image'
import useHandleRouteChange from '../../../hooks/useHandleRouteChange'
import { useAppContext } from '../../../hooks/useAppContext'
function PlayerPage({ stats, info }) {
  const { dispatch } = useAppContext()
  const { query } = useHandleRouteChange(dispatch)
  return (
    <PageTransistion>
      <section className='playerpage-info'>
        <Link href={`/${query.teamCode}`}>Back To Team Page</Link>
        <div className='image-container'>
          <Image src={`/${info.currentTeam.id}.png`} height={50} width={75} />
        </div>
        <div className='text-container'>
          <h2>{info.fullName}</h2>
          <p>Position: {info.primaryPosition.name}</p>
          <p>Number: {info?.primaryNumber || 'number not assigned yet'}</p>
        </div>
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
