import { Card, Col, Container, Row } from "react-bootstrap";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../componentes/formularios/Titulos.css"

const DerechoCivil = () => {
  useEffect(() => {
    cambiarTituloPagina("Derecho Civil");
  }, []);

  const ProcesosCiviles = [
    { id: 1, titulo: "Familia", img: "./Familia.png", link: "Familia" },
    { id: 2, titulo: "Contratos", img: "./Contratos.jpeg", link: "Contratos" },
    { id: 3, titulo: "Daños y Perjuicios", img: "./Daños-Perjuicios.png", link: "Daños-Perjuicios" },
    { id: 4, titulo: "Cobros Ejecutivos", img: "./Cobros-Ejecutivos.png", link: "Cobros-Ejecitovps" },
    { id: 5, titulo: "Derechos Reales", img: "./Derechos-Reales.png", link: "Derechos-Reales" },
    { id: 6, titulo: "Sucesiones", img: "./Sucesiones.png", link: "Sucesiones" }
]
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center T1">
        “Nuestras áreas de práctica en Derecho Civil”
      </h1>

      <Row xs={1} md={3} className="g-4">
        {ProcesosCiviles.map((proceso, index) => (
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

export default DerechoCivil