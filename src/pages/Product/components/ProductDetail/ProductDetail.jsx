import Rating from '../../../../components/Products/components/components/rating'

const ProductDetail = ({ title, description, rating, ratingPeople }) => {
  return (
    <>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='mt-4 text-slate-700'>{description}</p>
      <Rating rating={rating} ratingPeople={ratingPeople} />
    </>
  )
}

export default ProductDetail
