import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/main.css";

import logobjb from "../assets/logo1.png";
import logojdihn from "../assets/logojdihn.png";
import logoereport from "../assets/logoereport.png";
import logokonsul from "../assets/logokonsul.png";
import logoprov from "../assets/logoprov.png";

const SitusKonten = () => {
  const colStyle = {
    width: "200px",
    maxHeight: "150px", // Set tinggi maksimal di sini
    margin: "0",
    padding: "0",
  };

  const logoStyle = {
    width: "70px",
    height: "70px",
    objectFit: "contain",
  };

  return (
    <div className="situs">
      <Container>
        <Row
          className="d-flex justify-content-center align-items-stretch"
          style={{ margin: "0", padding: "0" }}
        >
          <h4
            className="fw-bold mb-5"
            style={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              margin: "0",
              padding: "0",
            }}
          >
            <hr
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                border: "1px solid black",
              }}
            />
            Situs
          </h4>
          <Col md={2} style={{ colStyle, flex: 1 }}>
            <Link
              to="https://kalselprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className=" text-black p-3 rounded text-center " id="situs1">
                <img
                  src={logoprov}
                  alt="Logo 1"
                  className="fs-4"
                  style={logoStyle}
                />
                <p className="fs-5 fw-bold">Provinsi Kalsel</p>
              </div>
            </Link>
          </Col>
          <Col md={2} style={{ colStyle, flex: 1 }}>
          <Link
              to="https://e-report.jdihn.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className=" text-black p-3 rounded text-center boxx"
                id="situs2"
              >
                <img
                  src={logokonsul}
                  alt="Logo 2"
                  className="fs-4 "
                  style={logoStyle}
                />
                <p className="fs-5 fw-bold" style={{ whiteSpace: "nowrap" }}>
                  Konsultasi Hukum
                </p>
              </div>
            </Link>
          </Col>
          <Col md={2} style={{ colStyle, flex: 1 }}>
            <Link to="/halaman-tujuan" style={{ textDecoration: "none" }}>
              <div
                className=" text-black p-3 rounded text-center boxx"
                id="situs3"
              >
                <img
                  src={logoereport}
                  alt="Logo 3"
                  className="fs-4 "
                  style={logoStyle}
                />
                <p className="fs-5 fw-bold">E-Reporting</p>
              </div>
            </Link>
          </Col>
          <Col md={2} style={{ colStyle, flex: 1 }}>
          <Link
              to="https://jdihn.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className=" text-black p-3 rounded text-center boxx"
                id="situs4"
              >
                <img
                  src={logojdihn}
                  alt="Logo 4"
                  className="fs-4 "
                  style={logoStyle}
                />
                <p className="fs-5 fw-bold">JDIHN</p>
              </div>
            </Link>
          </Col>
          <Col md={2} style={{ colStyle, flex: 1 }}>
            <Link to="/halaman-tujuan" style={{ textDecoration: "none" }}>
              <div
                className=" text-black p-3 rounded text-center boxx"
                id="situs5"
              >
                <img
                  src={logobjb}
                  alt="Logo 5"
                  className="fs-4 "
                  style={logoStyle}
                />
                <p className="fs-5 fw-bold">Banjarbaru Kota</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SitusKonten;
