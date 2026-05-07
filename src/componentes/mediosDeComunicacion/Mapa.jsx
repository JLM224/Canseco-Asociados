import { Container } from "react-bootstrap";

const Mapa = () => {
const mapaUrl =
    "https://www.google.com/maps?q=Virgen+de+la+Merced+105,+San+Miguel+de+Tucumán,+Argentina&output=embed";
  return (
    <>
    <Container fluid>
        <div>
          <iframe
            title="Mapa Virgen de la Merced 105"
            style={{ border: 0, width: "100%", height: "200px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapaUrl}
          ></iframe>
        </div>
      </Container>
    </>
  )
}

export default Mapa