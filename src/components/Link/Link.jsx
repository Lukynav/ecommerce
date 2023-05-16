import { Link, useLocation } from 'react-router-dom'

const Links = ({ name, icon, path }) => {
  const currentPath = useLocation()
  const current = currentPath.pathname === path
  return (
    <Link to={path}>
      <div className={current ? 'flex gap-1 text-teal-800 font-bold pb-1 border-b-2 border-teal-800' : 'flex gap-1'}>
        {icon && <img src={icon} className='w-5' alt={name} />}
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default Links
