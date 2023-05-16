import Search from '../Search/Search'
import LinksContainer from './LinksContainer/LinksContainer'
import { NAV_CATEGORIES, NAV_ACCOUNT } from './NavLinks'

const Nav = () => {
  return (
    <nav className='w-screen h-14 flex justify-center items-center'>
      <div className='w-[900px] h-10 flex justify-between items-center'>

        <LinksContainer links={NAV_CATEGORIES} />

        <section className='flex gap-4 items-center'>
          <Search />
          <LinksContainer links={NAV_ACCOUNT} />
        </section>

      </div>
    </nav>
  )
}

export default Nav
