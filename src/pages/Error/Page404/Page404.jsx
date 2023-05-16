import { useLocation } from 'react-router-dom'

const Page404 = () => {
  const route = useLocation()
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center flex-col'>
      <h1 className='text-white text-9xl font-extrabold font-mono'>404</h1>
      <h2 className='text-white text-2xl font-extrabold font-mono'>Page not found!</h2>
      <p className='text-slate-200'>The route <strong className='text-orange-600'>"{route.pathname}"</strong> does not seem to exist</p>
      <a href='/' className='bg-slate-100 text-black px-6 py-1 rounded-md mt-6 font-bold'>Go home</a>
    </div>
  )
}

export default Page404
