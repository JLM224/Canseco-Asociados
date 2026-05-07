import { useEffect } from "react";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import TiposDerecho from "../componentes/tarjetasDeDerecho/TiposDerecho";
import { Container, Row } from "react-bootstrap";
import "../componentes/formularios/Titulos.css"

const Pagina_Principal = () => {
  useEffect(() => {
    cambiarTituloPagina("Pagina Principal");
  }, []);
  return (
    <Container fluid>
      <h1 className="text-center my-3 T1">Estudio Jurídico Canseco & Asociados</h1>     
        <TiposDerecho/>
    </Container>
  )
}

export default Pagina_Principal