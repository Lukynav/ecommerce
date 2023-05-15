const Costs = ({ price, discount }) => {
  return (
    <article className='w-full border-2 border-slate-200 bg-slate-100 mt-8 rounded-lg py-2 px-6 flex gap-2 flex-col'>
      <label className='flex items-center gap-2'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>
        Deliver
      </label>
      <select className='p-2 rounded-md'>
        <option>San Francisco, USA</option>
        <option>Los Angeles, USA</option>
        <option>Las Vegas, USA</option>
      </select>

      <div className='border-b-2 pb-4 border-slate-300'>
        <div className='mt-4 flex justify-between'>
          <p>Product price</p>
          <p className='flex gap-1'>{price} USD</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping</p>
          <p className='flex gap-1'>10.00 USD</p>
        </div>
      </div>

      <div className='flex justify-between font-extrabold'>
        <p>TOTAL</p>
        <p className='flex gap-1'>{(10 + price).toFixed(2)} USD</p>
      </div>
      {discount && <p className='text-slate-400 text-sm'>This price applied the {discount}% off</p>}
    </article>
  )
}

export default Costs
