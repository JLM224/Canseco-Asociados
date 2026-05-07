import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const DerechoPrevisional = () => {
  useEffect(() => {
    cambiarTituloPagina("Derecho Previsional");
  }, []);

  const ProcesosPrevisionales = [
    { id: 1, titulo: "Jubilaciones", img: "./Jubilaciones.png", link: "" },
    { id: 2, titulo: "Pensiones", img: "./Pensiones.png", link: "" },
    { id: 3, titulo: "Moratorias", img: "./Moratorias.png", link: "" }
]
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        ”Defensa de derechos en el Ámbito Previsional”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {ProcesosPrevisionales.map((proceso, index) => (
          <Col
            key={proceso.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
          >
            <Card className="h-100 text-center">
              <Link
                to={proceso.link}
                style={{ textDecoration: "none", color: "blue" }}
              >
                <Card.Img variant="top" src={proceso.img} />
                <Card.Body>
                  <Card.Title>{proceso.titulo}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DerechoPrevisional