import { useParams } from 'react-router-dom';
import PeraturanDPRD from '../components/PeraturanDprd';
import KeputusanDPRD from '../components/KeputusanDprd';

const DokumenHukumContent = () => {
  const { jenisDokumen } = useParams();

  switch (jenisDokumen) {
    case 'peraturanDPRD':
      return <PeraturanDPRD />;
    case 'keputusanDPRD':
      return <KeputusanDPRD />;
    // Tambahkan kasus lain sesuai kebutuhan
    default:
      return <div>Not Found</div>;
  }
};

export default DokumenHukumContent;