import {useParams} from "react-router-dom";
function ProductPage(){
  const categoryName=useParams();
  return(<div>This is product page {categoryName}</div>);
}
export{ProductPage}
