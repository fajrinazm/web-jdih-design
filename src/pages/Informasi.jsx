import { Routes, Route } from "react-router-dom";
import InformasiContent from "../components/InformasiContent"


const informasiMenu = [
  { label: 'Berita', path: '/informasi/berita' },
  // { label: 'Statistik', path: '/informasi/statistik' },
  { label: 'Kontak', path: '/informasi/kontak' },

  // Tambahkan item lain jika diperlukan
];

const Profil = () => {
  return (
    <div>
      <Routes>
      {informasiMenu.map((menu) => (
        <Route
          key={menu.label}
          path={menu.path}
          element={<InformasiContent label={menu.label} />}
        />
      ))}
    </Routes>
    </div>
  )
}

export default Profil