// ProdukHukum.js
import { Container, Row, Card, Col, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import produkHukumData from "../data/produkhukumData"; // Sesuaikan dengan path yang benar
import "../style/main.css";

const ProdukHukum = () => {
  const [data, setData] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    // Di sini, Anda dapat melakukan pengambilan data dari server atau sumber data lainnya
    // Misalnya menggunakan fetch atau axios
    // Contoh fetch:
    // fetch('URL_API_PRODUK_HUKUM')
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error('Error fetching data:', error));

    // Untuk sementara, gunakan data statis
    setData(produkHukumData);
  }, []);

  // Urutkan data berdasarkan tanggal (atau properti lain yang menunjukkan urutan) secara descending
  const sortedData = data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  // Ambil hanya 4 data pertama
  const displayedData = sortedData.slice(0, 4);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  const handleCloseModal = () => {
    setSelectedDocument(null);
  };

  return (
    <Container className="mt-5 mb-4">
      <Row className="mb-4">
        <h4
          className="fw-bold mb-5"
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          ⚖ Produk Hukum
          <hr
            style={{
              flex: 1,
              marginLeft: "10px",
              border: "1px solid black",
              height: "1px",
            }}
          />
        </h4>

        {displayedData.map((document, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card
              className="my-card"
              style={{ height: "100%", cursor: "pointer" }}
              onClick={() => handleDocumentClick(document)}
            >
              <Card.Body>
                <Card.Title className="fw-bold">{document.title}</Card.Title>
                <Card.Text>{document.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="secondary">Lihat Selengkapnya</Button>
          <hr
            style={{
              flex: 1,
              marginLeft: "10px",
              border: "1px solid black",
              height: "1px",
            }}
          />
        </div>
      </Row>

      {/* Modal untuk menampilkan detail dokumen */}
      <Modal show={selectedDocument !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDocument?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedDocument?.content}</p>
          {/* Tambahkan elemen HTML atau konten sesuai kebutuhan */}
          {/* Tampilkan file PDF dalam iframe */}
          {selectedDocument?.pdfUrl && (
            <iframe
              title="PDF Document"
              src={selectedDocument.pdfUrl}
              width="100%"
              height="500px"
            ></iframe>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProdukHukum;