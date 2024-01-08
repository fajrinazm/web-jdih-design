import { useState } from "react";
import { Container, Card, Button, Pagination } from "react-bootstrap";
import galerinavData from "../data/galerinavData.js";

const ITEMS_PER_PAGE = 5;

const GaleriCard = ({ gambarSrc, judul, deskripsi }) => (
  <Card>
    <div style={{ display: "flex" }}>
      <Card.Img
        variant="top"
        src={gambarSrc}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{judul}</Card.Title>
        <Card.Text>{deskripsi}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </div>
  </Card>
);

const GaleriNav = () => {
  const [activePage, setActivePage] = useState(1);

  const totalItems = galerinavData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = galerinavData.slice(startIndex, endIndex);

  return (
    <div>
      <Container className="mt-5 mb-5 animate__animated animate__fadeInLeft">
        <h4
          className="fw-bold mb-5"
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          📷 Galeri
          <hr
            style={{
              flex: 1,
              marginLeft: "10px",
              border: "1px solid black",
              height: "1px",
            }}
          />
        </h4>

        {currentItems.map((item) => (
          <GaleriCard
            key={item.id}
            gambarSrc={item.gambarSrc}
            judul={item.judul}
            deskripsi={item.deskripsi}
          />
        ))}

        <Pagination className="mt-3">
          <Pagination.Prev
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
          />
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === totalPages}
          />
        </Pagination>
      </Container>
    </div>
  );
};

export default GaleriNav;
