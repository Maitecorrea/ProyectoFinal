import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
const CartWidget = () => {
    var jsonString = localStorage.getItem("products")
    var products = JSON.parse(jsonString)
    var [state, setState] = useState(products)

    const deleteProduct = (_id) => {
        let index = products.findIndex(item => item._id === _id);
        products.splice(index, 1);
        var localStringJson = JSON.stringify(products)
        localStorage.setItem("products", localStringJson)

        var updatejson = localStorage.getItem("products")
        var productsUpdated = JSON.parse(updatejson)

        setState(productsUpdated)
        toast.success("El producto fue eliminado")
    }
    var prices = state.map((data) => data.price * data.count)
    var total = prices.reduce((a, b) => a + b, 0)

    return (<>
        <NavBar />
        <Toaster />
        <section className="cart_area">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Todos los items agregados al carrito de compras aparecerán aquí</p>
                    <h2><span className="section-intro__style">CartWidget </span></h2>
                </div>
                <div className="cart_inner">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>

                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Opciones</th>

                                </tr>
                            </thead>
                            <tbody>
                                {state.length == 0 ? <tr><h4 className='my-3 text-center'>No hay productos agregados</h4></tr> : state.map((data) => {
                                    return (
                                        <tr key={data._id}>
                                            <td>
                                                {data.name}
                                            </td>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={data.image} width={200} alt={data.name} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${data.price}.00</h5>
                                            </td>
                                            <td>
                                                <div className="product_count">
                                                    <input type="number" value={data.count}
                                                        className="input-text qty" disabled />
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${data.price * data.count}.00</h5>
                                            </td>
                                            <td>
                                                <h5><button onClick={() => deleteProduct(data._id)} className='btn btn-danger'>Eliminar <i className="bi bi-x-circle-fill"></i></button></h5>
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${total}.00</h5>
                                    </td>
                                </tr>

                                <tr className="out_button_area">
                                    <td className="d-none-l">
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <div className="checkout_btn_inner d-flex align-items-center">
                                            <Link className="gray_btn" to="/">Continuar Comprando</Link>
                                            <Link className="primary-btn ml-2" to="/checkout">Finalizar Compra</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default CartWidget;