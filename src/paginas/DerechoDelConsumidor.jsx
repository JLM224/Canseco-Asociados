import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const DerechoDelConsumidor = () => {
  useEffect(() => {
    cambiarTituloPagina("Derecho del Consumidor");
  }, []);

  const tarjetasConsumidor = [
    { id: 1, titulo: "Derechos y Garantias", img: "./Derechos-Garantias.png", link: "" },
    { id: 2, titulo: "Compra - Venta", img: "./Compra-Venta.png", link: "" },
    { id: 3, titulo: "Prestación de Servicios", img: "./PrestacionesDeServicios.png", link: "" },
    { id: 4, titulo: "Daños", img: "./DañosConsumidores.png", link: "" }
]
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        ”Servicios legales en Derecho al Consumidor”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {tarjetasConsumidor.map((tarjeta, index) => (
          <Col
            key={tarjeta.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="700"
          >
            <Card className="h-100 text-center">
              <Link
                to={tarjeta.link}
                style={{ textDecoration: "none", color: "blue" }}
              >
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

export default DerechoDelConsumidor