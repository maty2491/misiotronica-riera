import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>             
            <div className="container">
                <ul className="nav nav-pills flex-sm-column d-flex justify-content-center mb-4 sticky-top">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link fuente-a fw-bold">
                            <i className="fs-6 fa fa-house"></i>
                            <span className="fs-6 ms-3 ms-md-2 d-none d-sm-inline ">Inicio</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/productos"} className="nav-link fuente-a fw-bold">
                            <i className="fs-6 fa fa-store"></i>
                            <span className="fs-6 ms-3 ms-md-2 d-none d-sm-inline">Productos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/nosotros"} className="nav-link fuente-a fw-bold">
                            <i className="fs-6 fa fa-users"></i>
                            <span className="fs-6 ms-3 ms-md-2 d-none d-sm-inline">Nosotros</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contacto"} className="nav-link fuente-a fw-bold">
                            <i className="fs-6 fa fa-whatsapp"></i>
                            <span className="fs-6 ms-3 ms-md-2 d-none d-sm-inline">Contacto</span>
                        </Link>
                    </li>
                </ul>
                </div>
           
          
        </>
    )
}

export default Sidebar