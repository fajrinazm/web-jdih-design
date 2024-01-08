import { Container, Row, Col, } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../style/main.css"

const StatistikProduk = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <h4
          className="fw-bold mb-5"
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
         📈Statistik Produk Hukum
          <hr
            style={{
              flex: 1,
              marginLeft: "10px",
              border: "1px solid black",
              height: "1px",
            }}
          />
        </h4>
        <Col md={3}>
            <Link to="/halaman-tujuan"style={{ textDecoration: 'none' }}>
          <div className=" text-black p-3 rounded text-center boxx" id="box1" style={{ marginBottom: '20px'}}>
            <p className="fs-4 fw-bold">375</p>
            <p className="fs-5">Peraturan Daerah</p>
          </div>
            </Link>
        </Col>
        <Col md={3}>
            <Link to="/halaman-tujuan"style={{ textDecoration: 'none' }}>
          <div className=" text-black p-3 rounded text-center boxx" id="box2" style={{ marginBottom: '20px' }}>
            <p className="fs-4 fw-bold">205</p>
            <p className="fs-5">Peraturan Walikota</p>
          </div>
            </Link>
        </Col>
        <Col md={3}>
            <Link to="/halaman-tujuan"style={{ textDecoration: 'none' }}>
          <div className=" text-black p-3 rounded text-center boxx" id="box3" style={{ marginBottom: '20px' }}>
            <p className="fs-4 fw-bold">452</p>
            <p className="fs-5">Keputusan Walikota</p>
          </div>
            </Link>
        </Col>
        <Col md={3}>
            <Link to="/halaman-tujuan" style={{ textDecoration: 'none' }}>
          <div className=" text-black p-3 rounded text-center boxx" id="box4" style={{ marginBottom: '20px' }}>
            <p className="fs-4 fw-bold">0</p>
            <p className="fs-5">Dokumen Hukum Lainnya</p>
          </div>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default StatistikProduk;
