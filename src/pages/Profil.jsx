import { Routes, Route } from "react-router-dom";
import ProfilContent from "../components/ProfilContent";


const profilMenu = [
  { label: 'Sambutan Setwan', path: '/profil/sambutanSetwan' },
  { label: 'Sejarah JDIH', path: '/profil/sejarahjdih' },
  { label: 'Visi Misi', path: '/profil/visiMisi' },

  // Tambahkan item lain jika diperlukan
];

const Profil = () => {
  return (
    <div>
      <Routes>
      {profilMenu.map((menu) => (
        <Route
          key={menu.label}
          path={menu.path}
          element={<ProfilContent label={menu.label} />}
        />
      ))}
    </Routes>
    </div>
  )
}

export default Profil