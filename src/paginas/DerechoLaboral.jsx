import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const DerechoLaboral = () => {
  useEffect(() => {
    cambiarTituloPagina("Derecho Laboral");
  }, []);

  const ProcesosLaborales = [
    { id: 1, titulo: "Contratos Laborales", img: "./Contrato-Laboral.jpeg", link: "/contratos" },
    { id: 2, titulo: "Despidos", img: "./Despido.jpeg", link: "/despidos" },
    { id: 3, titulo: "Accidentes Laborales", img: "./Accidentes-Laborales.png", link: "/accidentes" },
    { id: 4, titulo: "Indemnizaciones y Liquidaciones", img: "./Indemnizaciones-Liquidaciones.jpeg", link: "/indemnizaciones" }
]

  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        “Asistencia jurídica en Derecho Laboral”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {ProcesosLaborales.map((proceso, index) => (
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

export default DerechoLaboral