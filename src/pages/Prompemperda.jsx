import { Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import "../style/main.css"

const Prompemperda = () => {
  // Gantilah dengan URL atau path dokumen PDF yang diberikan oleh admin
  const pdfDocumentUrl = "/documentdata/testdoc.pdf";

  return (
    <div>
      <Jumbotron />
      <Container className="text-center mt-5 animate__animated animate__fadeInUp">
        <div className="pdf-container">
          {/* Gunakan tag <iframe> atau <embed> untuk menampilkan dokumen PDF */}
          <iframe
            title="Dokumen PDF"
            src={pdfDocumentUrl}
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius:"10px" }}
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Prompemperda;
