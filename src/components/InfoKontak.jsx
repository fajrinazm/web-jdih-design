import Jumbotron from "./Jumbotron";
import Lokasi from "./Lokasi";
import { Container } from "react-bootstrap";

const InfoKontak = () => {
  return (
    <div>
      <Jumbotron />
      <Container className="mb-5 mt-5 animate__animated animate__fadeInLeft">
        {/* Komponen Peta */}
        <Lokasi />
      </Container>
    </div>
  );
};

export default InfoKontak;
