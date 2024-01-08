
import Carousel from 'react-bootstrap/Carousel';
import { Container, Card } from 'react-bootstrap';
import galeripageData from '../data/galeripageData'; // Sesuaikan dengan path yang benar

function Galeri() {
  return (
    <Container>
      <h4
        className="fw-bold mb-5"
        style={{
          background: 'white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        📷 Galeri
        <hr
          style={{
            flex: 1,
            marginLeft: '10px',
            border: '1px solid black',
            height: '1px',
          }}
        />
      </h4>
      <Card style={{ height: '100%' }}>
        <Card.Body>
          <Carousel data-bs-theme="dark">
            {galeripageData.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block mx-auto my-3"
                  src={item.image}
                  alt={item.alt}
                  style={{ width: '300px', height: '300px', maxWidth: '100%', maxHeight: '100%' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Galeri;