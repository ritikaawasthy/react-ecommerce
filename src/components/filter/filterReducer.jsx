const filterReducer=(state,action)=>{
  switch(action.type){
    case "SET_PRODUCTS":
    return({...state, products:action.payload})
    case "FILTER_BY_CATEGORY":
    return({products:action.payload.filter((item)=>item.categoryName===action.option.category) , filter: {category: [...state.category, action.option.category]}})
    case "SORT_PRICE_HIGH":
    return({...state, notes: state.notes.sort((a,b)=>a.priority-b.priority)});
  }
}
export {filterReducer}
