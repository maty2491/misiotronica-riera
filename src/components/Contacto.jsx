import React from 'react'

const Contacto = () => {
  return (

    <div className='container'>
      <div className='row'>
        <h1 className='display-5 text-center mb-4 mt-4'>Contacto</h1>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <form className='mb-5'>
            <div className="form-outline mb-4">
              <input type="text" id="form4Example1" className="form-control" placeholder='Nombre y apellido' />
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control" placeholder='Email de contacto' />
            </div>
            <div className="form-outline mb-4">
              <textarea className="form-control" id="form4Example3" rows="4" placeholder='Escriba su consulta...'></textarea>
            </div>
            <button type="submit" className="btn-a btn">Enviar consulta</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contacto