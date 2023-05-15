import { Link } from 'react-router-dom'
import Rating from '../components/rating'
import { Button } from '../../../index'

const Product = ({ productProps }) => {
  const { imgURL, title, price, description, ratingPeople, ratingStars, bestSeller, discount, id } = productProps
  return (
    <li>
      <Link to={'/product/' + id}>
        <>
          <header className='relative'>
            <img className='w-full h-60 object-cover rounded-xl border-2 border-gray-100 mb-4 top-0 left-o' src={imgURL} alt={description} />
            {bestSeller && <p className='text-white bg-orange-600 px-4 text-sm rounded-lg inline-block absolute top-2 right-2'>Best seller</p>}
          </header>

          <div className='flex justify-between'>
            <strong className='text-slate-800 text-lg truncate'>{title}</strong>
            {discount && (
              <div className='flex items-center gap-2'>
                <p className='text-sm bg-teal-700 text-white px-2 rounded-md'>{discount}%</p>
                <strong className='text-teal-700'>${price}</strong>
              </div>
            )}
            {!discount && <strong className='text-slate-800'>${price}</strong>}
          </div>

          <p className='text-slate-600 text-sm truncate'>{description}</p>
        </>
      </Link>
      <div className='mb-2 mt-2'>
        <Rating rating={ratingStars} ratingPeople={ratingPeople} />
      </div>
      <Button fullWidth={false} buttonText='Add to cart' />
    </li>
  )
}

export default Product
