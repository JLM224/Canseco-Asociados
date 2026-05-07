import DesplazamientoArriba from "./funcionesAuxiliares/DesplazamientoArriba";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProcesosAdministrativos from "./paginas/ProcesosAdministrativos";
import DerechoDelConsumidor from "./paginas/DerechoDelConsumidor";
import PropiedadIntelectual from "./paginas/PropiedadIntelectual";
import Mediaciones_Amparos from "./paginas/Mediaciones_Amparos";
import DerechoPrevisional from "./paginas/DerechoPrevisional";
import Pagina_Principal from "./paginas/Pagina_Principal";
import Sobre_Nosotros from "./paginas/Sobre_Nosotros";
import DerechoLaboral from "./paginas/DerechoLaboral";
import NavbarC from "./componentes/navbar/NavbarC";
import FooterC from "./componentes/footer/FooterC";
import DerechoPenal from "./paginas/DerechoPenal";
import DerechoCivil from "./paginas/DerechoCivil";
import ConsultaLegal from "./paginas/ConsultaLegal";
import Error404 from "./paginas/Error404";
import { useEffect } from "react";
import './App.css';
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true
    })
  }, [])
  return (
    <div className="contenedor">
      <Router>
        <DesplazamientoArriba />
        <NavbarC />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Pagina_Principal />}/>
            <Route path="/Sobre_Nosotros" element={<Sobre_Nosotros />}/>
            <Route path="/Consulta_Legal" element={<ConsultaLegal />}/>
            <Route path="/DerechoCivil" element={<DerechoCivil />}/>
            <Route path="/DerechoLaboral" element={<DerechoLaboral />}/>
            <Route path="/DerechoDelConsumidor" element={<DerechoDelConsumidor/>}/>
            <Route path="/ProcesosAdministrativos" element={<ProcesosAdministrativos/>}/>
            <Route path="/DerechoPenal" element={<DerechoPenal />}/>
            <Route path="/DerechoPrevisional" element={<DerechoPrevisional/>}/>
            <Route path="/PropiedadIntelectual" element={<PropiedadIntelectual/>}/>
            <Route path="/Mediaciones_Amparos" element={<Mediaciones_Amparos/>}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
          {/* <BotonWhatsapp/> */}
        </div>
      </Router>
      <FooterC/> 
    </div>
  )
}

export default App