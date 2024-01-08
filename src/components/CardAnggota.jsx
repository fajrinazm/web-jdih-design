// Di file CardAnggota.js
import { Container, Card, Table, Row, Col } from "react-bootstrap";
import profile1 from "../assets/exprofile.svg"
import "../style/main.css";

const CardAnggota = ({ data }) => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Card className="profile-card" style={{backgroundColor: '#DEE8F5'}}>
          <Card.Body>
            <Row>
              <Col md={3} className="profile-col">
                <img
                  src={profile1}
                  alt="Profile"
                  className="profile-image"
                />
                <p className="text-center fw-bold mt-5">{data.jabatan}</p>
              </Col>
              <Col md={9}>
                <div >
                  <Table borderless style={{ borderRadius: '10px' }}>
                    <tbody>
                      <tr>
                        <th>Nama</th>
                        <td >: {data.nama}</td>
                      </tr>
                      <tr>
                        <th>TTL</th>
                        <td>: {data.ttl}</td>
                      </tr>
                      <tr>
                        <th>Agama</th>
                        <td>: {data.agama}</td>
                      </tr>
                      <tr>
                        <th>Alamat</th>
                        <td>: {data.alamat}</td>
                      </tr>
                      <tr>
                        <th>Pendidikan</th>
                        <td>: {data.pendidikan}</td>
                      </tr>
                      <tr>
                        <th>Fraksi</th>
                        <td>: {data.fraksi}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CardAnggota;
