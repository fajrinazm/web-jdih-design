import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import "../style/PaperBackground.css";

const SejarahJdih = () => {
  return (
    <div>
      <Jumbotron />
      <Container fluid className="paper-background-sejarah animate__animated animate__fadeInUp" style={{ width: "50%" }}>
        <p className="fw-bold">Sejarah JDIH di Indonesia</p>
        <p className="text-justify">
          Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara
          historis melekat erat dengan pembangunan hukum nasional dalam upaya
          mewujudkan supremasi hukum. Dikatakan demikian karena embrio
          pembentukan JDIHN adalah salah satu rekomendasi dari kegiatan
          pembangunan hukum nasional yaitu Seminar Hukum Nasional III tahun 1974
          di Surabaya. Seminar hukum tersebut diselenggarakan oleh Badan
          Pembinaan Hukum Nasional dalam upaya membedah semua unsur pembangunan
          hukum dalam rangka mengingidentifikasi permasalahan dan menemukan
          solusi pemecahannya. Pada saat membedah dokumentasi hukum, para
          peserta seminar mengetahui bahwa dukungan dokumentasi hukum terhadap
          pembangunan hukum nasional masih sangat lemah. Dokumentasi hukum belum
          mampu menyediakan dokumen dan informasi hukum dengan cepat dan tepat
          pada saat dibutuhan. Dokumentasi hukum belum mampu menyediakan akses
          informasi hukum yang efektif, sehingga dokumen/informasi hukum sulit
          dicari dan ditemukan kembali pada saat dibutuhkan untuk mendukung
          pelaksanaan kegiatan pembangunan hukum, seperti: penelitian hukum,
          perencanaan hukum, penyusunan naskah akademis, penyusunan rancangan
          peraturan perundang-undangan, pembentukan kebijakan pimpinan dan
          lain-lain.
        </p>
        <p className="fw-bold">Sejarah JDIH di Banjarbaru</p>
        <p>
          Kota banjarbaru sebelumnya merupakan bagian dari Kabupaten Banjar.
          Dengan dikeluarkannya Undang-Undang Nomor 9 Tahun 1999 tentang
          Pembentukan Kotamadya Daerah Tingkat II Banjarbaru, Kota Banjarbaru
          resmi menjadi Kotamadya, dengan dikepalai oleh seorang Walikota.
        </p>
        <p>
          Keberadaan JDIH pada saat terbentuknya Kota Banjarbaru masih belum
          berkembang. Di samping itu produk hukum yang dihasilkan masih belum
          banyak sehingga dokumentasi dan informasi hukum tidak menjadi
          perhatian penting. Dengan seiring kemajuan Kota Banjarbaru serta
          semakin banyaknya produk hukum yang dihasilkan, JDIH sangat dirasakan
          pentingnya.
        </p>
        <p>
          Pada awalnya JDIH masih berbentuk sangat sederhana. Informasi terhadap
          produk hukum yang dihasilkan hanya dipublikasikan melalui media massa
          (Banjarbaru Post) dan juga berupa cetakan-cetakan Perda yang diberikan
          kepada SKPD-SKPD di lingkungan Pemerintah Kota Banjarbaru maupun ke
          Kabupaten-Kabupaten yang ada di Kalimantan Selatan.
        </p>
        <p>
          Dengan semakin majunya teknologi, pada tahun 2012 Kota Banjarbaru atas
          prakarsa Kepala Bagian Hukum (Edi Sutiarman, SH., MH) dibantu oleh
          Kasubbag Dokumentasi dan Informasi Hukum (Diana Fitriawardani, SH)
          melalui kegiatan Pembangunan JDIH membuat website sebagai sarana untuk
          pelaksanaan JDIH.
        </p>
        <p>
          Selanjutnya website tersebut disempurnakan oleh Kepala Bagian Hukum
          (Gugus Sugiarto, SH, MM) dengan dibantu oleh Kasubbag Dokumentasi dan
          Informasi (Humratun Adawiyah, SH) agar sesuai dengan Peraturan
          Presiden Republik Indonesia Nomor 33 Tahun 2012 tentang Jaringan
          Dokumentasi dan Informasi Hukum Nasional, Peraturan Menteri Dalam
          Negeri Nomor 02 Tahun 2014 tentang Pengelolaan Jaringan Dokumentasi
          dan Informasi Hukum Kementerian Dalam Negeri dan Pemerintah Daerah dan
          Peraturan Menteri Hukum dan HAM Nomor 8 Tahun 2019 tentang Standar
          Pengelolaan Dokumen dan Informasi Hukum.
        </p>
      </Container>
    </div>
  );
};
export default SejarahJdih;
