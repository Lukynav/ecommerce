import Link from '../../Link/Link'

const LinksContainer = ({ links }) => {
  return (
    <ul className='flex gap-6'>
      {links && links.map((el, i) => {
        return (<li key={i}><Link name={el.name} path={el.path} icon={el.icon} /></li>)
      })}
    </ul>
  )
}

export default LinksContainer
