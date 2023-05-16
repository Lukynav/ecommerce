import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Products from '../../components/Products/Products'
import TopInfo from '../../components/TopInfo/TopInfo'

const Home = () => {
  return (
    <div className='pb-10'>
      <TopInfo />
      <Nav />
      <Banner />
      <Products />
    </div>
  )
}

export default Home
