import { useEffect, useState } from 'react'

const Rating = ({ rating, ratingPeople }) => {
  const [stars, setStars] = useState([])
  const [people, setPeople] = useState(null)

  useEffect(() => {
    const RATING = Math.round(rating)
    const RATING_ARRAY = [false, false, false, false, false]
    RATING_ARRAY.fill(true, 0, RATING)
    setStars(RATING_ARRAY)
  }, [rating])

  useEffect(() => {
    setPeople(numberAbreviation(ratingPeople))
  }, [ratingPeople])

  return (
    <div class='flex items-center'>
      {stars.map((star, index) => {
        if (star === true) return (<svg key={index} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-yellow-400'><path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' /></svg>)
        if (star === false) return (<svg key={index} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-slate-400'><path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' /></svg>)
      })}
      <p className='px-2 text-slate-400 text-sm'>({people} rating)</p>
    </div>
  )
}

const numberAbreviation = (num) => {
  let numAbreviated = ''
  if (num < 1000) return num
  if (num < 1000000) {
    numAbreviated = (num / 1000).toFixed(1)
    return numAbreviated + 'k'
  }
  numAbreviated = (num / 1000000).toFixed(1)
  return numAbreviated + 'M'
}

export default Rating
