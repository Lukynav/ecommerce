import PRODUCTS from '../../../data'
import ProductCategory from './components/ProductCategory/ProductCategory'

const Products = () => {
  const CATEGORIES = [{
    name: 'Our best sellers',
    products: PRODUCTS.filter(el => el.bestSeller)
  },
  {
    name: 'Get the best discount',
    products: PRODUCTS.filter(el => el.discount)
  },
  {
    name: 'All products',
    products: PRODUCTS
  }]

  return (
    <div className='w-[900px] m-auto mt-12'>
      {CATEGORIES.map((category, index) => {
        let isFirstCategory = false // first element is for the dashed under the section
        if (index !== 0) isFirstCategory = true
        return (<ProductCategory key={index} name={category.name} products={category.products} firstCategory={isFirstCategory} />)
      })}
    </div>
  )
}

export default Products
