import Jumbotron from "../components/Jumbotron";
import DaftarAnggota from "../components/DaftarAnggota";
import { Container,} from "react-bootstrap";
import "../style/main.css"

const AnggotaDprd = () => {
  return (
    <div>
      <Jumbotron />
      <Container className="mt-5 mb-5 animate__animated animate__slideInLeft">
       <DaftarAnggota/>
      </Container>
    </div>
  );
};

export default AnggotaDprd;
