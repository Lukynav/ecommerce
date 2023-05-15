const Page400 = () => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center flex-col'>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-40 h-40 text-white'><path stroke-linecap='round' stroke-linejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>
      <h1 className='text-white text-5xl font-extrabold font-mono mt-10'>Error: 400</h1>
      <h2 className='text-slate-200 mt-4 text-2xl font-extrabold font-mono'>The product not exist!</h2>
      <a href='/' className='bg-slate-100 text-black px-6 py-1 rounded-md mt-6 font-bold'>Go home</a>
    </div>
  )
}

export default Page400
