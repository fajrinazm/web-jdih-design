import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import "../style/PaperBackground.css";

const SambutanSetwan = () => {
  return (
    <div>
      <Jumbotron />
      <Container fluid className="paper-background animate__animated animate__fadeInUp"  style={{ width: "50%" }}>
        {/* Konten halaman Anda */}
        <p> Assalamu`alaikum Wr. Wb.</p>
        <p>
          Salam Sejahtera untuk kita semua. Puji Syukur kita panjatkan kehadirat
          Allah SWT, Tuhan Yang Maha Esa karena atas berkat rahmat-Nya jualah
          sehingga Pelayanan Informasi Produk Hukum Daerah Melalui Website
          Jaringan Dokumentasi dan Informasi Hukum Pemerintah Kota Banjarbaru,
          dapat terus ditingkatkan.
        </p>
        <p>
          Jaringan Dokumentasi dan Informasi Hukum merupakan wadah pendayagunaan
          bersama atas dokumentasi dan informasi hukum secara tertib, terpadu
          dan berkesinambungan. Website adalah salah satu sarana Jaringan
          Dokumentasi dan Informasi Hukum yang memberikan pelayanan informasi
          hukum secara cepat, lengkap, mudah dan cepat. Selain itu juga
          sekaligus sebagai sarana penyebarluasan (publikasi) produk-produk
          Hukum Daerah.
        </p>
        <p>
          Dengan keberadaan Website Jaringan Dokumentasi dan Informasi Hukum
          Pemerintah Kota Banjarbaru, diharapkan masyarakat dapat dengan mudah
          mendapatkan informasi produk hukum daerah yang dihasilkan oleh
          Pemerintah Kota Banjarbaru, serta dengan mengetahui produk hukum mampu
          menciptakan masyarakat Kota Banjarbaru yang sadar, taat dan tertib
          hukum.
        </p>
        <p>
          Akhirnya, Semoga dengan keberadaan Website Jaringan Dokumentasi dan
          Informasi Hukum Pemerintah Kota Banjarbaru ini, mampu mengoptimalkan
          pemenuhan kebutuhan masyarakat akan informasi produk hukum Daerah
          sejalan dengan visi misi Kota Banjarbaru sebagai Kota Pelayanan yang
          berkarakter.
        </p>
        <br></br>
        <div className="text-center">
          <p>Wassalamuaalaikum Wr. Wb.</p>
          <p>Sekretaris Dewan</p>
          <p>DPRD Kota Banjarbaru</p>
          <p>TTD</p>
          <p>Hj. Armnawaty Sufiatin, SP., MM</p>
        </div>
      </Container>
    </div>
  );
};
export default SambutanSetwan;
