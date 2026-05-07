import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const DerechoPenal = () => {
  useEffect(() => {
    cambiarTituloPagina("Derecho Penal");
  }, []);

  const ProcesosPenales = [
    { id: 1, titulo: "Denuncias", img: "./Denuncias.png", link: "" },
    { id: 2, titulo: "Querellas", img: "./Querellas.png", link: "" },
    { id: 3, titulo: "Juicios", img: "./Juicios.png", link: "" },
    { id: 4, titulo: "Audiencias", img: "./Audiencias.png", link: "" },
    { id: 5, titulo: "Restricciones", img: "./Restricciones.png", link: "" },
    { id: 6, titulo: "Reparaciones", img: "./Reparaciones.png", link: "" }
]
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        ”Asesoramiento jurídico especializado en Derecho Penal”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {ProcesosPenales.map((proceso, index) => (
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

export default DerechoPenal