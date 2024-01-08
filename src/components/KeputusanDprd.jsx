import { Container } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Table from "./Table";
import dataKeputusan from "../data/dataKeputusan";


const KeputusanDPRD = () => {
  return (
    <div>
      <Jumbotron />
      <Container className="animate__animated animate__fadeInUp">
        <Table data={dataKeputusan} />
      </Container>
    </div>
  );
};

export default KeputusanDPRD;
