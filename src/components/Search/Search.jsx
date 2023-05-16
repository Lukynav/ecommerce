import { useEffect, useRef, useState } from 'react'
import searchAutocomplete from './searchAutocomplete'
import { Link } from 'react-router-dom'

const Search = () => {
  const [search, setSearch] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const inputRef = useRef(null)

  const handleInput = () => {
    const { value } = inputRef.current
    setSearch(value)
  }

  useEffect(() => {
    if (search === '') return setSearchResult(null)
    setSearchResult(searchAutocomplete(search))
  }, [search])

  return (
    <form className='flex px-2 items-center bg-slate-100 border-2 border-slate-200 rounded-md relative'>
      <input onChange={handleInput} ref={inputRef} type='text' placeholder='Search...' className=' px-1 outline-none bg-transparent w-64' />
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'><path fillRule='evenodd' d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z' clipRule='evenodd' /></svg>
      <ul className={search ? 'absolute top-8 left-0 w-full bg-white border-2 border-slate-200 rounded-md z-50 shadow-xl py-2' : 'hidden'}>
        {searchResult
          ? searchResult.map((result, index) => {
            if (result.err) return (<li key={index} className='w-46 px-2 truncate text-slate-500 hover:bg-slate-200'>{result.err}</li>)
            return (<Link to={`/product/${result.id}`}><li key={index} className='w-full px-2 truncate text-slate-500 hover:bg-slate-200'>🔎 {result.title}</li></Link>)
          })
          : <li className='px-2 text-slate-600'>Not found.</li>}
      </ul>
    </form>
  )
}

export default Search
