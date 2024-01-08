import { useState } from "react";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedback: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      feedback: "",
      name: "",
      email: "",
      phone: "",
      organization: "",
    });
  };

  return (
    <Container>
      <Row>
    <Col md={{ span: 8, offset: 2 }}>
      <h6>
        Saran, komentar atau pertanyaan terkait produk-produk Hukum atau
        pelayanan Hukum dapat disampaikan melalui form di bawah:
      </h6>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            {/* Kolom pertama */}
            <Form.Group controlId="name">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan Nama"
                required
                style={{ backgroundColor: "#F1F6F9", marginBottom: "10px" }}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan Alamat Email"
                required
                style={{ backgroundColor: "#F1F6F9", marginBottom: "10px" }}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>No HP</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukkan No HP"
                required
                style={{ backgroundColor: "#F1F6F9", marginBottom: "10px" }}
              />
            </Form.Group>

            <Form.Group controlId="organization">
              <Form.Label>Instansi</Form.Label>
              <Form.Control
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Masukkan Instansi"
                required
                style={{ backgroundColor: "#F1F6F9", marginBottom: "10px" }}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            {/* Kolom kedua */}
            <Form.Group controlId="feedback">
              <Form.Label>Pertanyaan / Saran</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Masukkan Pertanyaan atau Saran"
                required
                style={{ height: "220px", backgroundColor: "#F1F6F9", marginBottom: "10px" }}
              />
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Kirim
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
  <Row style={{ marginTop: "50px" }}>
    <Col md={{ span: 8, offset: 2 }}>
      <Table responsive borderless style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="fw-bold">Kantor DPRD Kota Banjarbaru</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">
              Jalan Basuki Rahmat No.3 Lapangan Murjani, Kota Banjarbaru Kalimantan Selatan
            </td>
          </tr>
          <tr>
            <td>Telepon:</td>
            <td>
              <span style={{ marginRight: "10px" }}>
                <span style={{ textDecoration: "none", color: "black" }}>0511-6749983</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <span style={{ marginRight: "10px" }}>
                <span style={{ textDecoration: "none", color: "black" }}>
                  dewan.kotabanjarbaru@gmail.com
                </span>
              </span>
            </td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>
              <a
                className="fw-bold"
                href="https://jdih.jakarta.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px", textDecoration: "none", color: "black" }}
              >
                link website
              </a>
            </td>
          </tr>
          <tr>
            <td>Instagram:</td>
            <td>
              <a
                className="fw-bold"
                href="https://www.instagram.com/birohukum.dki/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px", textDecoration: "none", color: "black" }}
              >
                link instagram
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Row>
    </Container>
  );
};

export default FeedbackForm;
