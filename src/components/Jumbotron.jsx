import { useLocation, Link } from "react-router-dom";

import "../style/jumbotron.css";

const Jumbotron = () => {
  // Mengakses informasi tentang rute yang sedang aktif
  const location = useLocation();
  const currentPath = location.pathname;

  // Fungsi untuk mendapatkan judul berdasarkan path
  const getTitleAndBreadcrumb = (path) => {
    let title = "";
    let breadcrumb = [];

    switch (path) {
      case "/beranda":
        title = "Beranda";
        breadcrumb = [];
        break;
      case "/profil/SambutanSetwan":
        title = "Sambutan Sekretaris Dewan DPRD Banjarbaru";
        breadcrumb = ["Beranda", "Profil", "Sambutan Setwan"];
        break;
      case "/profil/SejarahJdih":
        title = "Sejarah JDIH";
        breadcrumb = ["Beranda", "Profil", "Sejarah JDIH"];
        break;
      case "/profil/VisiMisi":
        title = "Visi Misi";
        breadcrumb = ["Beranda", "Profil", "Visi Misi"];
        break;
      case "/anggotadprd":
        title = "Anggota DPRD";
        breadcrumb = ["Beranda", "Anggota DPRD"];
        break;
      case "/promperda":
        title = "Promperda";
        breadcrumb = ["Beranda", "Promperda"];
        break;
      case "/dokumenhukum/keputusanDPRD":
        title = "Keputusan DPRD";
        breadcrumb = ["Beranda", "Dokumen Hukum", "Keputusan DPRD"];
        break;
      case "/dokumenhukum/peraturanDPRD":
        title = "Peraturan DPRD";
        breadcrumb = ["Beranda", "Dokumen Hukum", "Peraturan DPRD"];
        break;
      case "/informasi/Berita":
        title = "Berita";
        breadcrumb = ["Beranda", "Informasi", "Berita"];
        break;
      case "/informasi/Statistik":
        title = "Statistik";
        breadcrumb = ["Beranda", "Informasi", "Statistik"];
        break;
      case "/informasi/Kontak":
        title = "Kontak";
        breadcrumb = ["Beranda", "Informasi", "Kontak"];
        break;
      case "/galeri":
        title = "Galeri";
        breadcrumb = ["Beranda", "Galeri"];
        break;
      default:
        title = "Judul Default";
        breadcrumb = [];
        break;
    }

    return { title, breadcrumb };
  };

  const { title, breadcrumb } = getTitleAndBreadcrumb(currentPath);

  return (
    <div className="my-jumbotron">
      <div className="jumbotron-content">
        {/* Judul */}
        <h1>{title}</h1>
        {/* Navigasi Breadcrumb */}
        <div className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <Link to={`/${item.toLowerCase()}`} className="breadcrumb-link">
                {item}
              </Link>
              {index < breadcrumb.length - 1 && (
                <span className="breadcrumb-separator"> / </span>
              )}
            </span>
          ))}
        </div>

        {/* Teks deskripsi jumbotron */}
        <p>{/* Deskripsi jumbotron */}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
