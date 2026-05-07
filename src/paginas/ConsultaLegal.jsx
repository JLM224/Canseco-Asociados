import { Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"
import { useEffect } from "react";
import Formulario from "../componentes/formularios/Formulario";
import LinksContacto from "../componentes/mediosDeComunicacion/LinksContacto";

const Contacto = () => {
  useEffect(() => {
    cambiarTituloPagina("Consulta Legal");
  }, []);
  return (
    <Container className="my-3">
      <h1 className="text-center T1">Estudio Jurídico Canseco & Asociados</h1>
      <Row>
        <Col xs={12}>
        <Formulario/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacto