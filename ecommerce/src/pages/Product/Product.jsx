import { useLocation, useNavigate } from 'react-router-dom'
import { TopInfo, Nav, Button } from '../../components'
import { useEffect, useState } from 'react'
import { ProductDetail, Costs } from './components'
import productExist from './utils/productExist'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProductToCart,removeProductFromCart } from '../../redux/actions/actions'

const Product = () => {
  const [product, setProduct] = useState(null)
  const cart = useSelector(state => state.cart)
  const { pathname } = useLocation()
  const PRODUCT_ID = pathname.split('/')[2] // Get the id of the product by url
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const exist = cart.filter(el => el === PRODUCT_ID).length
  const [productWasAdded, setProductWasAdded] = useState(exist)

  useEffect(() => { productExist(PRODUCT_ID, setProduct, navigate) }, [])

  const addCart = ()=> dispatch(addNewProductToCart(PRODUCT_ID))
  const removeCart = ()=> dispatch(removeProductFromCart(PRODUCT_ID))

  // Loading render
  if (!product) return <>Loading, please wait...</>
  const { imgURL, title, description, ratingStars, ratingPeople, price, discount } = product
  return (
    <div className='pb-10'>
      <TopInfo />
      <Nav />
      <main className='w-[900px] m-auto h-60 py-6 grid grid-cols-2 gap-20'>
        <img className='w-96 border-2 border-slate-200 rounded-lg' src={imgURL} alt='' />
        <section className=''>
          <ProductDetail title={title} description={description} rating={ratingStars} ratingPeople={ratingPeople} />
          <Costs price={price} discount={discount} />
          <article className='flex flex-col mt-6 gap-2'>
            {
              !productWasAdded
              ? <Button handleClick={addCart} setter={setProductWasAdded} buttonType='primary' buttonText='Add to cart' />
              :<Button handleClick={removeCart} setter={setProductWasAdded} buttonType='danger' buttonText='Remove cart' />
            }
            <Button buttonText='Buy now' />
          </article>
        </section>
      </main>
    </div>
  )
}

export default Product
