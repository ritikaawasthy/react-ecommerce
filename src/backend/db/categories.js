import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Topwear",
    picture: 'https://storyset.com/illustration/city-girl/bro#65012EFF&hide=Car,City,Clouds,traffic-light,fire-hydrant,Floor&hide=simple',
  },
  {
    _id: uuid(),
    categoryName: "Bottomwear",
    picture: 'https://storyset.com/illustration/waist-bag/bro#65012EFF&hide=Clouds,speech-bubble,Line,Arrow&hide=simple' ,
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    picture: 'https://storyset.com/illustration/waist-bag/bro#65012EFF&hide=Clouds,speech-bubble,Line,Arrow&hide=simple' ,
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    picture: 'https://storyset.com/illustration/waist-bag/bro#65012EFF&hide=Clouds,speech-bubble,Line,Arrow&hide=simple' ,
  },

];
