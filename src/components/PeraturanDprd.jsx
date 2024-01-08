import { Container } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Table from "./Table";
import dataPeraturan from "../data/dataPeraturan";


const PeraturanDPRD = () => {
  return (
    <div>
      <Jumbotron />
      <Container className="animate__animated animate__fadeInUp">
        <Table data={dataPeraturan}/>
      </Container>
    </div>
  );
};

export default PeraturanDPRD;
