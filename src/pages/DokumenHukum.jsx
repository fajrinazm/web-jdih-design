import { Routes, Route } from "react-router-dom";
import DokumenHukumContent from "../components/DokumenHukumContent";

// Import komponen-komponen yang dibutuhkan
// import PeraturanDPRD from "../components/PeraturanDPRD";
// import KeputusanDPRD from "../components/KeputusanDPRD";

const dokumenHukumMenu = [
  { label: 'Peraturan DPRD', path: '/dokumenhukum/peraturanDPRD' },
  { label: 'Keputusan DPRD', path: '/dokumenhukum/keputusanDPRD' },
  // Tambahkan item lain jika diperlukan
];

const DokumenHukum = () => (
  <div>
    <Routes>
      {dokumenHukumMenu.map((menu) => (
        <Route
          key={menu.label}
          path={menu.path}
          element={<DokumenHukumContent label={menu.label} />}
        />
      ))}
    </Routes>
  </div>
);

export default DokumenHukum;