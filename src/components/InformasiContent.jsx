import { useParams } from "react-router-dom";
import InfoBerita from "../components/InfoBerita";
import InfoKontak from "../components/InfoKontak";
// import InfoStatistik from "../components/InfoStatistik";

const InformasiContent = () => {
  const { jenisInfo } = useParams();

  switch (jenisInfo) {
    case "Berita":
      return <InfoBerita />;
    // case "Statistik":
    //   return <InfoStatistik />;
    case "Kontak":
      return <InfoKontak />;
    // Tambahkan kasus lain sesuai kebutuhan
    default:
      return <div>Not Found</div>;
  }
};

export default InformasiContent;
