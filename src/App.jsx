import { Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio";
import Productos from "./components/Productos.jsx";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Error from "./components/Error";
import Menu from "./components/Menu";
import './index.css'


function App() {

  return (
    <>      
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
