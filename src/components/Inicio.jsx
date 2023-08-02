import { Link } from 'react-router-dom';
import banner from '../assests/robot.png';

const Inicio = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <h1 className="display-2 text-center text-md-center">¡Bienvenidos a Misiotrónica!</h1>
                        <hr className="my-4" />
                    </div>
                    <div className='col-md-12 col-lg-6 text-lg-start text-md-start text-sm-start text-center'>
                        <h3 className="">Tu tienda en línea de electrónica y PC. Encuentra dispositivos electrónicos de última generación, componentes para PC y accesorios tecnológicos de alta calidad. Mejora tu experiencia tecnológica con nosotros.</h3>
                        <p className="d-grid gap-2 d-md-flex justify-content-md-center ">
                            <Link className="btn-b fw-bold btn-lg m-3 " to={'/productos'} role="button">Comenzar...</Link>
                        </p>
                    </div>
                    <div className='col-md-12 col-lg-6 text-center'>
                        <img src={banner} className='img-fluid rounded-circle' alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Inicio;
