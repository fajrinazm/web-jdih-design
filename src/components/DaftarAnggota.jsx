// Di komponen yang berbeda atau di halaman yang membutuhkan data anggota DPRD
import CardAnggota from "../components/CardAnggota";
import { anggotaDprdData } from "../data/dataAnggota";

const DaftarAnggotaDprd = () => {
  return (
    <div>
      {anggotaDprdData.map((anggota, index) => (
        <CardAnggota key={index} data={anggota} />
      ))}
    </div>
  );
};

export default DaftarAnggotaDprd;
