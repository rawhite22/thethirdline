import Image from 'next/image'

function TeamInfo({ info }) {
  return (
    <section className='teamcode_team-info'>
      <h2>{info.name}</h2>
      <Image src={`/${info.id}.png`} height={100} width={130} alt='team-logo' />
    </section>
  )
}
export default TeamInfo
