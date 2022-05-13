
const filterReducer=(state,action)=>{
  switch(action.type){
    case "SET_INITIAL_PRODUCTS":
    return({products:action.payload, filterProducts: action.payload})
    case "FILTER_BY_CATEGORY_INITIAL":
    return({...state,filterProducts:action.payload.filter((item)=>action.category.includes(item.categoryName))})
    case "FILTER_BY_CATEGORY":
    return({...state, filterProducts:state.products.filter((item)=>action.category.includes(item.categoryName))})
    case "REMOVE_CATEGORY":
    return({...state,
    filterProducts:state.products.filter((item)=>action.remove===item.categoryName)
    })
    case "SORT_PRICE_HIGH":
    return({...state,filterProducts: state.filterProducts.sort((a,b)=>sortPriceComparision(a,b, action.type))});
    case "SORT_PRICE_LOW":
    return({...state,filterProducts: state.filterProducts.sort((a,b)=>sortPriceComparision(a,b,action.type))});
    case "FILTER_BY_GENDER":
    console.log(action.gender,state.filterProducts)
    return({...state,filterProducts:state.filterProducts.filter((item)=>item.gender===action.gender)})
    case "FILTER_BY_RATING":
    return({...state,filterProducts:state.products.filter((item)=>item.rating===action.rating)})
  }
}

const sortPriceComparision=(a,b, type)=>{
  const price1=(a.sale.onSale)? a.sale.salePrice : a.price
  const price2=(b.sale.onSale)? b.sale.salePrice : b.price

  if (type==='SORT_PRICE_HIGH'){
    return price2-price1
  }else{
    return price1-price2
  }

}
export {filterReducer}
