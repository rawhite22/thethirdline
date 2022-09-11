import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/pro-light-svg-icons'

function TeamSelectTeam({ team, index }) {
  return (
    <div
      className={
        (index + 1) % 2 ? 'team-select-team' : 'team-select-team even'
      }>
      <h2>{team.name}</h2>
      <div className='img-container'>
        <Image
          src={`/${team.id}.png`}
          height={100}
          width={140}
          alt='Team Logo'
        />
      </div>

      <Link href={`/${team.teamCode}`}>
        <div className='link-container'>
          <FontAwesomeIcon icon={faCircleInfo} className='icon' />
          Team Page
        </div>
      </Link>
    </div>
  )
}
export default TeamSelectTeam
