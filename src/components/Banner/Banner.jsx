const Banner = () => {
  return (
    <header className='w-[900px] h-96 m-auto rounded-xl overflow-hidden relative'>
      <img src='background.webp' className='object-cover w-full' alt='' />
      <div className='w-full h-full bg-gradient-to-b from-transparent to-black z-10 absolute top-0' />
      <section className='absolute bottom-8 w-full flex flex-col justify-center z-20'>
        <h1 className='text-white text-center text-2xl font-extrabold font-serif'>NEW COLLECTION</h1>
        <h2 className='text-gray-200 text-center mt-1 mb-4'>Level up your style with our summer collection</h2>
        <a href='#' className='m-auto px-6 py-1 border-2 border-white rounded-full text-white text-sm'>SHOP NOW</a>
      </section>
    </header>
  )
}

export default Banner
