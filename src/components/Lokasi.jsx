import { Container } from "react-bootstrap";
import FormFeedback from "./FormFeedback";
const Lokasi = () => {
  return (
    <div className="">
      <Container className="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.4883735270512!2d114.83074809328654!3d-3.440577767993775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de681735ee1f7ad%3A0x42a8cc2a35be3136!2sKantor%20DPRD%20Kota%20Banjarbaru!5e0!3m2!1sid!2sid!4v1702961152444!5m2!1sid!2sid"
          width="800"
          height="300"
          style={{
            border: 0,
            borderRadius: "10px",
            maxWidth: "100%",
            marginBottom: "50px",
          }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
      <Container>
        {/* Struktur HTML atau komponen React untuk peta */}
        <FormFeedback />
      </Container>
    </div>
  );
};

export default Lokasi;
