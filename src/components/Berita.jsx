import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BeritaData from '../data/dataBerita'; // Sesuaikan dengan path yang benar




const BeritaCard = ({ berita }) => {
  const { id, judul, tanggal, isi, sumber, link, gambar } = berita;

  return (
    <Col md={6} key={id}>
      <Card style={{ marginBottom: '20px', height: '100%' }}>
        {gambar && <Card.Img variant="top" src={gambar} alt={`Gambar untuk ${judul}`} />}
        <Card.Body style={{ height: '100%' }}>
          <Card.Title>{judul}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tanggal}</Card.Subtitle>
          <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '80px' }}>
            {isi}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Sumber: {sumber}</Card.Subtitle>
          <Button variant="secondary" href={link} target="_blank" rel="noopener noreferrer">
            Baca Selengkapnya
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const BeritaKonten = () => {
  return (
    <Container>
      <Row>
        <h4
          className="fw-bold mb-5"
          style={{
            background: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          📰 Berita Terbaru
          <hr
            style={{
              flex: 1,
              marginLeft: '10px',
              border: '1px solid black',
              height: '1px',
            }}
          />
        </h4>

        {BeritaData.map((berita) => (
          <BeritaCard key={berita.id} berita={berita} />
        ))}
      </Row>
    </Container>
  );
};

export default BeritaKonten;
