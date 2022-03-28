import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Pants",
    brand: "Zara",
    gender: 'men',
    price: "5000",
    sale: {onSale: true,
            salePrice: "2500"},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/karina-carvalho-fKTKVrNqXQQ-unsplash.webp',
  },
  {
    _id: uuid(),
    title: "Blue Jeans",
    brand: "Levis",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/lucas-lenzi-VKkDAV7kj1Q-unsplash.webp',
  },
  {
    _id: uuid(),
    title: "Blue Jeans",
    brand: "Levis",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/mohamad-khosravi-d54wbtjedog-unsplash.webp',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Levis",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/rayul-_M6gy9oHgII-unsplash.jpg',
  },
  {
    _id: uuid(),
    title: "Blue Jeans",
    brand: "Levis",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/rodrigo-summer-BjMtxBMHGuw-unsplash.webp',
  },

  {
    _id: uuid(),
    title: "Pants",
    brand: "Mango",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/rodrigo-summer-BjMtxBMHGuw-unsplash.webp',
  },{
    _id: uuid(),
    title: "Pants",
    brand: "Zara",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/tatiana-pavlova-dYJdfioyJzU-unsplash.webp',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Zara",
    gender: 'men',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/tobe-mokolo-PbZ-TVPX6UI-unsplash.jpg',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Levis",
    gender: 'women',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/tobe-mokolo-PbZ-TVPX6UI-unsplash.jpg',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Levis",
    gender: 'women',
    price: "3000",
    sale: {onSale: true,
            salePrice: "2500"},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/bottom/tobe-mokolo-PbZ-TVPX6UI-unsplash.jpg',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Mango",
    gender: 'women',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/bottom/hush-naidoo-jade-photography-1vBexPeDD3o-unsplash_11zon.webp',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Mango",
    gender: 'women',
    price: "3000",
    sale: {onSale: false,
            salePrice: ""},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/bottom/laura-chouette-q4Wrsho-t2E-unsplash.webp',
  },
  {
    _id: uuid(),
    title: "Pants",
    brand: "Levis",
    gender: 'women',
    price: "3000",
    sale: {onSale: true,
            salePrice: "2500"},
    categoryName: "Bottomwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/bottom/sule-makaroglu-09O56jbspW0-unsplash_11zon.webp',
  },

  {
    _id: uuid(),
    title: "Top",
    brand: "Levis",
    gender: 'women',
    price: "1000",
    sale: {onSale: true,
            salePrice: "800"},
    categoryName: "Topwear",
    picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/1.webp',
  },

    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/andreea-chidu-FPV2_FbNHoE-unsplash_11zon.webp',
    },

    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/chalo-garcia-2ZwJwQtKDqQ-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/engin-akyurt-jaZoffxg1yc-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/engin-akyurt-jaZoffxg1yc-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/left-top-1.webp',
    },
    {
      _id: uuid(),
      title: "Top",
      brand: "Mango",
      gender: 'women',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/top/left-top-2.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/ezgif.com-gif-maker.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/left-bottom-3.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/right-bottom-3.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/right-top-2.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/1.webp',
    },
    {
      _id: uuid(),
      title: "T-shirt",
      brand: "Zara",
      gender: 'men',
      price: "1000",
      sale: {onSale: true,
              salePrice: "400"},
      categoryName: "Topwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/top/right-top-3.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'men',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/shoes/christian-lucas-ga76RrgtSKE-unsplash.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'men',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/shoes/dorian-hurst-a9uWPQlIbYc-unsplash.webp',
    },{
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'men',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/shoes/jamill-del-rosario-D5Bz7VQCx_k-unsplash.webp',
    },{
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'men',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/men/shoes/jawad-jawahir-GYz6tSl_XT0-unsplash.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/alex-quezada-qAyOt0aGsCo-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/apostolos-vamvouras-SfzbMnIocdc-unsplash_11zon.webp'
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/chitto-cancio-9urrzNhb3PU-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/laura-chouette-AlX5260JnmI-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/no-revisions-Nif90HDYRRE-unsplash_11zon.webp',
    },
    {
      _id: uuid(),
      title: "Shoes",
      brand: "Zara",
      gender: 'women',
      price: "3000",
      sale: {onSale: false,
              salePrice: ""},
      categoryName: "Footwear",
      picture : 'https://github.com/ritikaawasthy/react-ecommerce/blob/components/public/media/products/productListing/women/shoes/pesce-huang-88LNB7QuiQo-unsplash_11zon.webp',
    },









];
