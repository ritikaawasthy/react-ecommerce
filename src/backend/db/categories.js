import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Topwear",
    picture: 'https://raw.githubusercontent.com/ritikaawasthy/react-ecommerce/components/public/media/category/top.webp',
  },
  {
    _id: uuid(),
    categoryName: "Bottomwear",
    picture: 'https://raw.githubusercontent.com/ritikaawasthy/react-ecommerce/components/public/media/category/bottom.webp' ,
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    picture: 'https://raw.githubusercontent.com/ritikaawasthy/react-ecommerce/landingpage/public/media/products/productListing/women/shoes/simona-todorova-jMlig2nx1-Y-unsplash_11zon.webp' ,
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    picture: 'https://raw.githubusercontent.com/ritikaawasthy/react-ecommerce/components/public/media/category/accessories.webp' ,
  },

];




// https://storyset.com/illustration/city-girl/bro#65012EFF&hide=Car,City,Clouds,traffic-light,fire-hydrant,Floor&hide=simple
// https://storyset.com/illustration/waist-bag/bro#65012EFF&hide=Clouds,speech-bubble,Line,Arrow&hide=simple
