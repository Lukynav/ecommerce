import Product from '../Product/Product'

const ProductCategory = ({ name, products, firstCategory }) => {
  return (
    <div className={firstCategory ? 'mt-12 pt-2 border-t-2 border-slate-200' : 'mt-12'}>
      <h3 className='font-extrabold uppercase text-slate-800 text-2xl mb-4'>{name}</h3>
      <ul className='w-full grid grid-cols-3 gap-6 gap-y-10'>
        {
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  productProps={product}
                />
              )
            })
          }
      </ul>
    </div>
  )
}

export default ProductCategory
