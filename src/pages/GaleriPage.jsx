import GaleriNav from "../components/GaleriNav";
import Jumbotron from "../components/Jumbotron";
import { Container } from "react-bootstrap";

const GaleriPage = () => {
  return (
    <div>
      <Jumbotron />
      <Container className="mt-5 mb-5">
        <GaleriNav/>
      </Container>
    </div>
  );
};

export default GaleriPage;
