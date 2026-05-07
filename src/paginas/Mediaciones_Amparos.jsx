import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const Mediaciones_Amparos = () => {
  useEffect(() => {
    cambiarTituloPagina("Mediaciones y Amparos");
  }, []);

  const ProcesosDeMediaciones_Amparos = [
    { id: 1, titulo: "Mediaciones", img: "./MediacionLegal.png", link: "" },
    { id: 2, titulo: "Amparos", img: "./Amparo.png", link: "" }
]
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        ”Actuación jurídica en instancias de Mediación y Amparo”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {ProcesosDeMediaciones_Amparos.map((proceso, index) => (
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

export default Mediaciones_Amparos