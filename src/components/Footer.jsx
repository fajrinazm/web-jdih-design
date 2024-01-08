import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="mt-4">
        <Row className="d-flex justify-content-between">
          <Col lg="5" className="mt-4">
            <img src={LogoImage} alt="Logo" width="200" height="60" />
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              laborum magni aut voluptatibus praesentium quae consectetur nisi
              et dolorem harum explicabo, accusamus quaerat temporibus. Eum sint
              voluptas fugit non dolores?
            </p>
            <div>
              <p>
                <FaPhone style={{ marginRight: "8px" }} /> 0511-6749983
              </p>
            </div>
            <div>
              <p>
                <FaEnvelope style={{ marginRight: "8px" }} />{" "}
                dewan.kotabanjarbaru@gmail.com
              </p>
            </div>
          </Col>
          <Col lg="3" className="mt-4">
            <h5 className="fw-bold">Alamat</h5>
            <p>
              Jalan Basuki Rahmat No.3 <br />
              Lapangan Murjani, Kota Banjarbaru <br />
              Kalimantan Selatan
            </p>
          </Col>
          <Col lg="3" className="mt-4">
            <h5 className="fw-bold ">Social Media</h5>
            <div className="mt-3 ">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ margin: "0 8px", color:"white" }}
                />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ margin: "0 8px", color:"white" }}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ margin: "0 8px", color:"white"}}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">
          &copy; Copyright {new Date().getFullYear()} by Sekretariat DPRD Kota Banjarbaru, All Right Reserved
          </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
