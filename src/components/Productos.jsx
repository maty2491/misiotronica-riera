import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const FiltroProd = productos.filter((producto) => {
    const buscarProdMin = producto.nombre.toLowerCase();
    return buscarProdMin.includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    // Realizar la solicitud a json-server para obtener los productos
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los datos de los productos
        setProductos(data);
      })
      .catch((error) => {
        alert("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-3">Lista de productos</h1>

        <div className="input-group mb-5">          
            <input type="search"
              id="form1"
              className="form-control"
              value={searchTerm}
              placeholder="Buscar producto por nombre..."
              onChange={(e) => setSearchTerm(e.target.value)} />
          <button type="button" className="btn btn-primary">
            <i className="fas fs-6 fa-search"></i>
          </button>
        </div>
        <div className="row">
          {FiltroProd.map((producto) => (
            <div className="col-lg-4 col-sm-12 col-md-12 mb-4" key={producto.id}>
              <div className="card text-center h-100" >
                <img src={producto.imagen} className="img-fluid d-block p-2" />
                <div className="card-body ">
                  <h5 className="card-title text-white">{producto.nombre}</h5>
                  <hr className="bg-dark" />
                  <p className="card-text text-white">{producto.descripcion}</p>
                  <hr className="bg-dark"/>
                  <p className="card-text text-white">Unidades: {producto.stock}</p>
                  <button className="btn-a btn">$ {producto.precio}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

};

export default Productos;