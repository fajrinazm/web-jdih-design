import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import "../style/PaperBackground.css";

const VisiMisi = () => {
    const visi = [
        'Terwujudnya Kota Banjarbaru sebagai Kota empat dimensi mandiri dan terdepan.',
        'Terciptanya kepastian hukum/jaminan hukum, perlindungan hukum serta ketertiban hukum dan tegaknya supremasi hukum.',
        'Terciptanya masyarakat, aman damai dan sejahtera.',
      ];
    
      const misi = [
        'Membangun budaya sadar hukum dalam masyarakat khususnya Kota Banjarabaru dalam rangka ketaatan terhadap hukum, baik perundangan-undangan nasional maupun daerah, hukum adat, hukum agama serta menjunjung tinggi supremasi hukum yang bersendikan keadilan dan dalam berbagai aspek kehidupan.',
        'Penegakan hukum secara konsisten guna terwujudnya kepastian hukum.',
        'Meningkatkan peranan aparat penegak hukum untuk memelihara dan menjaga keamanan dan ketertiban serta stabilitas daerah guna terwujudnya jaminan kepastian hukum.',
        'Mengembangkan peran serta masyarakat dalam menciptakan ketertiban.',
        'Memasyarakatkan Produk Hukum Daerah dan Pemerintah Pusat kepada masyarakat melalui sosialisasi dan penyuluhan hukum.',
        'Mengadakan koordinasi sesama komponen pemerintah Kota Banjarbaru dalam menyiapkan Rancangan Peraturan Daerah, Rancangan Keputusan Kepala Daerah dan Keputusan lainnya yang akan diajukan ke Dewan Perwakilan Daerah.',
        'Mengevaluasi dan menganalisa Produk Hukum yang telah dan belum dilaksakanan.',
      ];
  return (
    <>
    <Jumbotron />
    <Container className="paper-background-visimisi animate__animated animate__fadeInUp" style={{ width: "50%" }}>
      <p className="fw-bold">Visi:</p>
      {visi.map((item, index) => (
        <p key={index}>{index + 1}. {item}</p>
      ))}
      <br />
      <p className="fw-bold">Misi:</p>
      {misi.map((item, index) => (
        <p key={index}>{index + 1}. {item}</p>
      ))}
    </Container>
  </>
  );
};

export default VisiMisi;
