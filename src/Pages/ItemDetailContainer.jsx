import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import {data} from '../data'
import { Link } from 'react-router-dom'
import ItemDetail from "../Components/ItemDetail";

const ItemDetailContainer = () => {
    const [count, setCount]=useState(1)
    const params = useParams()
    var elementThis
    for (var i = 0; i < data.length; i++) {

        if (data[i]._id === params.id) {
            elementThis = data[i]
        }
    }

    var elementProduct = {
        name: elementThis.name,
        price: elementThis.price,
        count: count,
        _id: elementThis._id,
        image: elementThis.image
    }
    var change = true
    const addCart = async(count) => {
        var jsonString = localStorage.getItem("products")
        var jsonObject = JSON.parse(jsonString)
        if(count >= 1){
            for(var i=0;i<jsonObject.length; i++){
                if(jsonObject[i]._id === elementProduct._id){
                    jsonObject[i].count = parseInt(jsonObject[i].count) + parseInt(count)
                    toast.success("Se ha actualizado el producto!")
                    change=false
                    break;
                }
            }
            if(change){
                    jsonObject.push(elementProduct)
                    toast.success("Añadido!")    
            } 
        }
        else{
            toast.error("Para agregar un producto, este no debe ser inferior a la unidad")
        }

        var localStringJson = JSON.stringify(jsonObject)
        localStorage.setItem("products", localStringJson)
    }

    return (<>
        <NavBar />
        <Toaster/>
        <div className="product_image_area">
            <ItemDetail count={count} setCount={setCount} elementThis={elementThis} addCart={addCart}/>
        </div>
        <hr/>
    </>);
}

export default ItemDetailContainer;