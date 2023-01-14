import NavBar from '../Components/NavBar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast'
import db from '../firebase-config'

const Checkout = () => {
    const nav = useNavigate()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [direction, setDirection] = useState("")
    const [id, setOrderId] = useState([])
    var jsonString = localStorage.getItem("products")
    var products = JSON.parse(jsonString)
    var prices = products.map((data) => data.price * data.count)
    var total = prices.reduce((a, b) => a + b, 0)

    const sendOrder = async () => {
        if (products.length == 0) {
            toast.error("No has seleccionado ningún producto")
        }
        else {
            if (name == "" || phone == "" || email == "" || direction == "") {
                toast.error("Los datos de contacto están incompletos")
            }

            else {
                const order = {
                    buyer: { name: name, phone: phone, email: email, direction: direction },
                    items: products,
                    total: total
                }
                const ordersCollection = collection(db, "orders")
                await addDoc(ordersCollection, order).then(({ id }) => {
                    setOrderId(id)
                    toast.success('La referencia de su producto es: ' + id)
                })
                var jsonObject = []
                var localStringJson = JSON.stringify(jsonObject)
                localStorage.setItem("products", localStringJson)
            }
        }
    }
    return (<>
        <NavBar />
        <Toaster />
        <section className="checkout_area section-margin--small">
            <div className="container">
                <div className="billing_details">
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Detalles de Contacto</h3>
                            <form className="row contact_form">
                                <div className="col-md-12 form-group p_star">
                                    <h6>Nombres / Apellidos</h6>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="John García" required />
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <h6>Contacto</h6>
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="N° Contacto" required />
                                </div>
                                <div className="col-md-12 form-group">
                                    <h6>Email</h6>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="JohnGarcia@gmail.com" required />
                                </div>
                                <div className="col-md-12 form-group">
                                    <h6>Dirección</h6>
                                    <input type="text" value={direction} onChange={(e) => setDirection(e.target.value)} className="form-control" placeholder="Kra 99 # 99 - 99 Localidad XYZ" required />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="order_box">
                                <h2>Su orden</h2>
                                <ul className="list">
                                    <li><a href="#"><h4>Productos <span>Total</span></h4></a></li>
                                    {products.length == [] ? <li>No hay productos</li> : products.map((data) => {
                                        return (
                                            <li>
                                                <a href="#">{data.name} <span className="middle">x {data.count}</span> <span className="last">${data.price * data.count}.00</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="list list_2">
                                    <li><a href="#">Subtotal <span>${total}.00</span></a></li>
                                    <li><a href="#">Costos de envío <span> $0.00</span></a></li>
                                    <li><a href="#">Total <span>${total}.00</span></a></li>
                                </ul>
                                <div className="text-center py-2">
                                    <a className="button button-paypal" onClick={sendOrder}>Finalizar Compra</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Checkout;