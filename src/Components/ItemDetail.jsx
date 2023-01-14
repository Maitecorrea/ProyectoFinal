

const ItemDetail = ({addCart, elementThis, count,setCount}) => {
    return ( <>
                <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-6">
                        <div className="owl-carousel owl-theme s_Product_carousel d-flex justify-content-center">
                            <div className="single-prd-item">
                                <img className="img-fluid" src={elementThis.image} alt="" width={400}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>{elementThis.name}</h3>
                            <h2>$ {elementThis.price},00</h2>
                            <ul className="list">
                                <li><a className="active"><span>Category</span> : {elementThis.category}</a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet commodi harum veritatis saepe, est reprehenderit corrupti velit! Vel dolorem et temporibus hic, praesentium doloremque veniam ab modi aliquid.</p>
                            <div className="product_count">
                                <label for="qty">Quantity:</label>
                                <input type="number" className='px-2' min="1" pattern="^[0-9]+" value={count} onChange={(e)=>setCount(e.target.value)} />
                                <a className="mx-2 btn button primary-btn" onClick={()=>addCart(count)}>Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> );
}
 
export default ItemDetail;