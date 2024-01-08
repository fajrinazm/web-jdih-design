import { Container, Row, Col } from "react-bootstrap";
import MainMenu from "../components/MainMenu";
import Galeri from "../components/Galeri";
import ProdukHukum from "../components/ProdukHukumKonten";
import StatistikProduk from "../components/StatistikProdukHukum";
import BeritaKonten from "../components/Berita";
import SitusKonten from "../components/SitusTerkait";

const Beranda = () => {
  const containerStyle = {marginTop:'150px', marginBottom: '50px' }; // Sesuaikan nilai margin sesuai kebutuhan
  return (
    <div className="berandaPage ">
      <MainMenu/>
      <Container className="animate__animated animate__fadeInLeft">
        <ProdukHukum />
      </Container>
      <Container className="animate__animated animate__fadeInUp" style={containerStyle}>
        <StatistikProduk />
      </Container>
      <Container className=" animate__animated animate__fadeInUp" style={containerStyle}>
        <Row>
          <Col md={8}>
            <BeritaKonten />
          </Col>
          <Col>
            <Galeri />
          </Col>
        </Row>
      </Container>
      <Container className="animate__animated animate__fadeInLeft" style={containerStyle}>
        <SitusKonten />
      </Container>
    </div>
  );
};

export default Beranda;
