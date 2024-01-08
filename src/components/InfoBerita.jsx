import { Container} from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Berita from "./Berita"



const InfoBerita = () => {
    return (
        <div>
            <Jumbotron/>
            <Container className="mt-5 mb-5 animate__animated animate__fadeInLeft">
                <Berita/>
            </Container>
        </div>
    );
  };
  
  export default InfoBerita;