import React from 'react';
import errorImage from '../assests/ban.png'; // Importa la imagen que desees mostrar

const Error = () => {
  return (
    <div className="container py-5">
      <div className='row'>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h1 className="display-1 text-center">404</h1>
          <h3 className="display-5 text-center">Página no encontrada</h3>

        </div>
        <div className='col-lg-6 col-sm-12 col-md-6'>
      <img src={errorImage} className='img-fluid d-block' alt="" />

        </div>

      </div>




    </div>
  );
};

export default Error;