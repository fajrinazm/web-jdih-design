import { useParams } from "react-router-dom";
import SambutanSetwan from "./SambutanSetwan";
import SejarahJdih from "./SejarahJdih";
import VisiMisi from "./VisiMisi";

const ProfilContent = () => {
  const { jenisProfil } = useParams();

  switch (jenisProfil) {
    case "SambutanSetwan":
      return <SambutanSetwan />;
    case "SejarahJdih":
      return <SejarahJdih />;
    case "VisiMisi":
      return <VisiMisi />;
    // Tambahkan kasus lain sesuai kebutuhan
    default:
      return <div>Not Found</div>;
  }
};

export default ProfilContent;
