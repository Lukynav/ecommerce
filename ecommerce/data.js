import { v4 as uuid } from 'uuid';

const PRODUCTS = [
{
    id:uuid(),
    title: 'Remera nike swoosh',
    description:'Remera blanca nike, para mujeres.',
    imgURL: 'https://essential.vtexassets.com/arquivos/ids/543991-1200-auto?v=637850383495030000&width=1200&height=auto&aspect=true',
    ratingStars: 4.8,
    ratingPeople: 92101,
    price: 97.18,
    bestSeller: true
},
{
    id:uuid(),
    title: 'Remera nike blanca, who is she?',
    description:'Remera de lobo, con el lema "who is she?"',
    imgURL: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw03bdbd87/products/NI_DJ1845-100/NI_DJ1845-100-1.JPG',
    ratingStars: 4.8,
    ratingPeople: 9101,
    price: 37.18,
    discount: 50
},
{
    id:uuid(),
    title: 'Remera nike boxy',
    description:'Remera unisex, multicolor',
    imgURL: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/D/DD1270-100_0.jpg',
    ratingStars: 4.3,
    ratingPeople: 15282,
    price: 98.72,
    bestSeller: true
},
{
    id:uuid(),
    title: 'Remera nike negro',
    description:'Remera negra con el logo nike impreso, en forma de circulo',
    imgURL: 'https://redsport.vteximg.com.br/arquivos/ids/1095474-1000-1000/REMERA-NIKE-TEE-ICON-CLASH-MUJER.jpg?v=637727761455570000',
    ratingStars: 1.7,
    ratingPeople: 343,
    price: 71.99
},
{
    id:uuid(),
    title: 'Remera nike azul',
    description:'Remera azul masculina, con el logo SB',
    imgURL: 'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2afce2a6/products/NI_AR5006-435/NI_AR5006-435-1.JPG',
    ratingStars: 2.7,
    ratingPeople: 145,
    price: 43.99,
    discount: 50,
},
{
    id:uuid(),
    title: 'Remera nike clasica',
    description:'Remera blanca nike, clasica color blanca.',
    imgURL: 'https://static.dafiti.com.ar/p/nike-0197-692691-1-product.jpg',
    ratingStars: 4.8,
    ratingPeople: 10929101,
    price: 67.18,
    bestSeller: true
},
{
    id:uuid(),
    title: 'Remera nike roja femenina',
    description:'Remera Nike Sportswear Icon Clash',
    imgURL: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97175ca4/products/NI_DD5033-673/NI_DD5033-673-1.JPG',
    ratingStars: 2.7,
    ratingPeople: 1245,
    price: 31.99,
    discount: 50,
},
{
    id:uuid(),
    title: 'Remera nike SB negra',
    description:'Remera negra lisa nike.',
    imgURL: 'https://cdn.shopify.com/s/files/1/0276/4288/8329/products/4aa85332-d211-4806-944b-fe6396336949_1024x1024.webp?v=1659104632',
    ratingStars: 3.2,
    ratingPeople: 23401,
    price: 87.18,
},
{
    id:uuid(),
    title: 'Remera nike short',
    description:'Remera corta, color negro con logo de nike grande',
    imgURL: 'https://tripstore.com.ar/media/catalog/product/cache/image/600x800/e9c3970ab036de70892d86c6d221abfe/A/A/AA3144-014_0_6.jpg',
    ratingStars: 4.3,
    ratingPeople: 15282,
    price: 108.72,
    bestSeller: true
},
{
    id:uuid(),
    title: 'Remera nike Street',
    description:'Remera nike ideal para salir unisex',
    imgURL: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe2ef1241/products/NIDR7813-100/NIDR7813-100-1.JPG',
    ratingStars: 2.7,
    ratingPeople: 5311,
    price: 91.99
},
]

export default PRODUCTS