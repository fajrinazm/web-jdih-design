import {Routes, Route} from 'react-router-dom';

import Navigasi from "./components/Navigasi";

import Footer from "./components/Footer";

import Beranda from "./pages/Beranda";
// import Profil from "./pages/Profil";
import AnggotaDprd from "./pages/AnggotaDprd";
import Promperda from "./pages/Prompemperda";
// import DokumenHukum from "./pages/DokumenHukum";
import DokumenHukumContent from './components/DocumentHukumContent';
import ProfilContent from './components/ProfilContent';
import InformasiContent from './components/InformasiContent';




// import Informasi from "./pages/Informasi";
import GaleriPage from "./pages/GaleriPage";





function App() {
  return (
    <>
    <Navigasi/>
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/beranda" element={<Beranda />}/>
      <Route path="/profil/:jenisProfil" element={<ProfilContent />}/>
      <Route path="/anggotadprd" element={<AnggotaDprd />}/>
      <Route path="/promperda" element={<Promperda />}/>
      <Route path="/dokumenhukum/:jenisDokumen" element={<DokumenHukumContent />} />
      <Route path="/informasi/:jenisInfo" element={<InformasiContent />}/>
      <Route path="/galeri" element={<GaleriPage />}/>
    </Routes>
    <Footer/>
    </>
  );
  
}

export default App
