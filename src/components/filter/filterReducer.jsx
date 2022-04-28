const filterReducer=(state,action)=>{
  switch(action.type){
    case "SET_PRODUCTS":
    return({...state, products:action.payload})
    case "FILTER_BY_CATEGORY":
    return({...state, products:action.payload.filter((item)=>item.categoryName===action.option.category) , filter: {...state.filter,category: [...state.filter.category, action.option.category]}})
    case "SORT_PRICE_HIGH":
    return({...state, filter: {...state.filter, price: {[action.type]: "on"}} ,products: state.products.sort((a,b)=>sortPriceComparision(a,b, action.type))});
    case "SORT_PRICE_LOW":
    return({...state, filter: {...state.filter, price: {[action.type]: "on"}}, products: state.products.sort((a,b)=>sortPriceComparision(a,b,action.type))});
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
