import PRODUCTS from '../../../data'

const searchAutocomplete = (search) => {
  const MAX_RESULT = 6
  if (typeof search !== 'string') return null
  const searchLowerCase = search.toLowerCase()

  const searchExactly = PRODUCTS.filter(el => el.title.toLowerCase() === searchLowerCase)

  const searchExactlyStr = PRODUCTS.filter(el => el.title.toLowerCase().includes(search))

  const searchParcial = PRODUCTS.filter(el => {
    const productArr = el.title.toLowerCase().split(' ') // ['remera','nike','street']
    const result = productArr.filter(arr => {
      const searchArr = searchLowerCase.split(' ') // ['remera','nike']
      const searchIncludes = searchArr.filter(s => productArr.includes(s))
      if (searchIncludes.length >= 2) return arr
    })
    if (result.length !== 0) return el
  })

  const searchByLastWord = PRODUCTS.filter(el => {
    const searchArr = search.split(' ')
    const lastWord = searchArr[searchArr.length - 1]
    const productArr = el.title.toLowerCase().split(' ')
    if (productArr.includes(lastWord)) return el
  })

  const searchAutocomplete = new Set([...searchExactlyStr, ...searchExactly, ...searchByLastWord, ...searchParcial])
  const searchAutocompleteExactly = new Set([...searchExactlyStr, ...searchExactly])

  if ([...searchAutocomplete].length === 0) return [{ err: `Not found: "${search}"` }]

  if (searchExactly.length !== 0) return [...new Set([...searchAutocompleteExactly, ...searchByLastWord])]

  return [...searchAutocomplete].slice(0, MAX_RESULT)
}

export default searchAutocomplete
