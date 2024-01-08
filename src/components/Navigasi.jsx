import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogoImage from "../assets/logo.svg";
import "../style/Navigasi.css";

const Navigasi = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Efek hanya dijalankan sekali setelah mount

  const [showProfilDropdown, setShowProfilDropdown] = useState(false);
  const [showDokumDropdown, setShowDokumDropdown] = useState(false);
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const dokumenHukumMenu = [
    { label: "Peraturan DPRD", path: "/dokumenhukum/peraturanDPRD" },
    { label: "Keputusan DPRD", path: "/dokumenhukum/keputusanDPRD" },
    // Tambahkan item lain jika diperlukan
  ];
  const profilMenu = [
    { label: "Sambutan Setwan", path: "/profil/SambutanSetwan" },
    { label: "Sejarah JDIH", path: "/profil/SejarahJdih" },
    { label: "Visi Misi", path: "/profil/VisiMisi" },
  ];
  const informasiMenu = [
    { label: 'Berita', path: '/informasi/Berita' },
    // { label: 'Statistik', path: '/informasi/Statistik' },
    { label: 'Kontak', path: '/informasi/Kontak' },
  
    // Tambahkan item lain jika diperlukan
  ];

  return (
    <Navbar
      id="navbar"
      variant="dark"
      className={`navbar mx-auto custom-background ${isSticky ? "sticky" : ""}`}
      style={{ position: "sticky", top: 0, zIndex: 100, width: "100%" }} // Tambahkan properti inline untuk membuat sticky
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/beranda"
          className="d-flex align-items-center"
        >
          <div>
            <img
              src={LogoImage}
              alt="Logo"
              width="200"
              height="60"
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="" style={{ margin: "auto" }}>
            <Nav.Link
              as={Link}
              to="/beranda"
              className="nav-animasi fw-bold"
              transition="true"
            >
              Beranda
            </Nav.Link>
            <NavDropdown
              title="Profil"
              className="fw-bold"
              id="profil-nav-dropdown"
              show={showProfilDropdown}
              onMouseEnter={() => setShowProfilDropdown(true)}
              onMouseLeave={() => setShowProfilDropdown(false)}
            >
              {profilMenu.map((menu) => (
                <NavDropdown.Item as={Link} to={menu.path} key={menu.label}>
                  {menu.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/anggotadprd"
              className=" fw-bold"
              transition="true"
            >
              Anggota DPRD
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/promperda"
              className="fw-bold"
              transition="true"
            >
              Promperda
            </Nav.Link>
            <NavDropdown
              title="Dokumen Hukum"
              className="fw-bold"
              id="dokum-nav-dropdown"
              show={showDokumDropdown}
              onMouseEnter={() => setShowDokumDropdown(true)}
              onMouseLeave={() => setShowDokumDropdown(false)}
            >
              {dokumenHukumMenu.map((menu) => (
                <NavDropdown.Item as={Link} to={menu.path} key={menu.label}>
                  {menu.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown
              title="Informasi"
              className="fw-bold"
              id="informasi-nav-dropdown"
              show={showInfoDropdown}
              onMouseEnter={() => setShowInfoDropdown(true)}
              onMouseLeave={() => setShowInfoDropdown(false)}
            >
              {informasiMenu.map((menu) => (
                <NavDropdown.Item as={Link} to={menu.path} key={menu.label}>
                  {menu.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/galeri"
              className=" fw-bold"
              transition="true"
            >
              Galeri
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
