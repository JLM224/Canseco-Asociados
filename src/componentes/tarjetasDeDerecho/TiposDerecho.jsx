import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TiposDeDerecho.css";

const TiposDerecho = () => {
  const tarjetas = [
    { id: 1, titulo: "Derecho Civil", img: "./Civil.jpeg", link: "/DerechoCivil" },
    { id: 2, titulo: "Derecho Laboral", img: "./Laboral.jpeg", link: "/DerechoLaboral" },
    { id: 3, titulo: "Derecho del Consumidor", img: "./Consumidor.jpeg", link: "/DerechoDelConsumidor" },
    { id: 4, titulo: "Procesos Administrativos", img: "./ProcesosAdministrativos.jpeg", link: "/ProcesosAdministrativos" },
    { id: 5, titulo: "Derecho Penal", img: "./Penal.jpeg", link: "/DerechoPenal" },
    { id: 6, titulo: "Derecho Previsional", img: "./Previsional.jpeg", link: "/DerechoPrevisional" },
    { id: 7, titulo: "Propiedad Intelectual", img: "./Copyright.jpeg", link: "/PropiedadIntelectual" },
    { id: 8, titulo: "Mediaciones y Amparos", img: "./Mediaciones.jpeg", link: "/Mediaciones_Amparos" }
]
  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {tarjetas.map((tarjeta, index) => (
          <Col
            key={tarjeta.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}>
            <Card className="h-100 text-center">
              <Link to={tarjeta.link}
                style={{ textDecoration: "none", color: "blue" }}>
                <Card.Img variant="top" src={tarjeta.img} />
                <Card.Body>
                  <Card.Title>{tarjeta.titulo}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TiposDerecho