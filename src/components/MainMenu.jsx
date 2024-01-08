import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Form, Button, Collapse } from "react-bootstrap";

import BgImg from "../assets/landingphoto1.svg";
import LogoImage2 from "../assets/logo1.png";
import "../style/main.css";

const MainMenu = () => {
  const [showFilterForm, setShowFilterForm] = useState(false);

  const handleFilterButtonClick = () => {
    setShowFilterForm(!showFilterForm);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
    >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center flex-column">
            <img
              src={LogoImage2}
              width="145"
              height="195"
              alt="Logo"
              style={{ marginTop: "100px" }}
            />
            <h1
              className="text-center fw-bold"
              style={{ color: "white" }}
            >
              Jaringan Dokumentasi dan Informasi Hukum Kota Banjarbaru
            </h1>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <Form className="d-flex justify-content-center align-items-center">
        <Form.Group className="w-50" controlId="ControlInput1">
          <Form.Control
            type="text"
            placeholder="Masukkan kata kunci pencarian Dokumen Hukum"
          />
        </Form.Group>
        <>
          <Button id="btn-cari" variant="light" style={{ fontSize: "15px" }}>
            Cari <FaSearch />
          </Button>
          <Button
            id="btn-filter"
            variant="light"
            style={{ fontSize: "15px" }}
            onClick={handleFilterButtonClick}
          >
            Filter <FaFilter />
          </Button>{" "}
        </>
      </Form>

      <Collapse in={showFilterForm}>
        <div>
          <Form className="d-flex justify-content-center align-items-center mt-3">
            <Form.Select
              id="select-bentuk"
              className="w-25"
              aria-label="Bentuk"
            >
              <option>Semua Bentuk</option>
              <option value="1">Keputusan DPRD</option>
              <option value="2">Peraturan DPRD</option>
             
            </Form.Select>
            <Form.Select id="select-tahun" className="w-25" aria-label="Tahun">
            <option>Semua Tahun</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="4">2020</option>
              <option value="5">2019</option>
              <option value="6">2018</option>
            </Form.Select>
          </Form>
          <Button
            id="btn-cari2"
            className="mt-3"
            variant="light"
            style={{
              fontSize: "15px",
              textAlign: "center",
              display: "block",
              margin: "auto",
            }}
          >
            Cari <FaSearch />
          </Button>{" "}
        </div>
      </Collapse>
    </section>
  );
};

export default MainMenu;
