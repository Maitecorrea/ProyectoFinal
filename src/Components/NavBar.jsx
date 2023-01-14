import opencart from '../opencart.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (<>
        <header className="header_area">
            {/* <div className="main_menu"> */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container ">
                        
                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"><Link to='/' className="">
                            <img src={opencart} className='mx-4' alt="" width={60} height={60} />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset d-flex flex-wrap align-items-center justify-content-center justify-content-md-between" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto mr-auto align-center">
                                <li className="px-4 nav-item">
                                    <Link to='/' className=" nav-link">Listado de Productos</Link>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false">Categorías De Compra</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to='/category/decor' className="nav-link">Decoración</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/category/electrodomestics' className="nav-link">Electrodomésticos</Link>
                                        </li>                                        
                                        <li className="nav-item">
                                            <Link to='/category/video-games' className="nav-link">Video Juegos</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/category/tecnology' className="nav-link">Tecnología</Link>
                                        </li>                                
                                    </ul>
                                </li>
                            </ul>

                            <ul className="nav-shop">
                                <Link to='/shop/products' className="button dark-single">
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            {/* </div> */}
        </header>
    </>);
}

export default NavBar;