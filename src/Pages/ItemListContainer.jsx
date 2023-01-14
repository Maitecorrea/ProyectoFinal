import ItemList from "../Components/ItemList";
import NavBar from "../Components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {data} from '../data'

const ItemListContainer = () => {
  const [dataList, setDataList] = useState([])
  const params = useParams()

  var exist = localStorage.getItem("products")
  if(exist==null){
    var products = []
    var JsonObjets = JSON.stringify(products)
    localStorage.setItem("products", JsonObjets)  
  }

const dataCategory = [];

data.forEach(el => {
  if (el.category === params.id) {
    dataCategory.push(el);
  }
});
if (dataCategory.length === 0) {
  for(var i=0; i<data.length;i++){
    dataCategory.push(data[i]);
  }
}

  return (<>
    <NavBar />
    <section className="my-4 calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Los items más populares del mercado</p>
          <h2>Listado De <span className="section-intro__style">Productos </span> <span className="badge btn-primary badge-secondary">({dataCategory.length})</span></h2>
        </div>
        <div className="row">
            {dataCategory.map((data)=>{
              return(
                <ItemList key={data._id} data={data}/>
              )
            })}
        </div>
      </div>
    </section>
  </>);
}

export default ItemListContainer;