import { FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import {
  Container,
  Form,
  FormControl,
  Button,
  InputGroup,
  Table as BootstrapTable, // Ganti nama import agar tidak konflik dengan komponen Table dari react-bootstrap
  Pagination,
  Modal,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import "../style/table.css";

const TableComp = ({ data = [], onRowClick, onSort }) => {
  // Data contoh untuk tabel
  const [statusOrder, setStatusOrder] = useState(null);
  const [dateOrder, setDateOrder] = useState(null);
  const [judulOrder, setJudulOrder] = useState(null);
  const [noOrder, setNoOrder] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = sortedData
    ? sortedData.slice(startIndex, startIndex + itemsPerPage)
    : [];
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const [selectedData, setSelectedData] = useState(null);
  const [showDocumentModal, setShowDocumentModal] = useState(false);

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedData(null);
  };

  const handleCloseModal = () => {
    setShowDocumentModal(false);
  };

  const handleSort = (field) => {
    let newSortedData;
    let newOrder;

    if (field === "status") {
      newOrder = statusOrder === "asc" ? "desc" : "asc";
      setStatusOrder(newOrder);
    } else if (field === "tanggal") {
      newOrder = dateOrder === "asc" ? "desc" : "asc";
      setDateOrder(newOrder);
    } else if (field === "judul") {
      newOrder = judulOrder === "asc" ? "desc" : "asc";
      setJudulOrder(newOrder);
    } else if (field === "no") {
      newOrder = noOrder === "asc" ? "desc" : "asc";
      setNoOrder(newOrder);
    }

    if (
      field === "status" ||
      field === "tanggal" ||
      field === "judul" ||
      field === "no"
    ) {
      newSortedData = sortedData.slice().sort((a, b) => {
        if (field === "no") {
          return newOrder === "asc" ? a[field] - b[field] : b[field] - a[field];
        }
        return newOrder === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      });
    }

    setSortedData(newSortedData);
    if (onSort) {
      onSort(field, newOrder);
    }
  };

  const handleRowClick = (rowData) => {
    setSelectedData(rowData);
    setShowDocumentModal(true);
    if (onRowClick) {
      onRowClick(rowData);
    }
  };
  return (
    <div>
      <Container className="mt-5">
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Masukkan kata kunci pencarian "
              style={{
                width: "100%",
                maxWidth: "1000px",
              }}
            />
            <Form.Select
              id="select-tahun"
              aria-label="Tahun"
              style={{
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
              }}
            >
              <option>Semua Tahun</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="4">2020</option>
              <option value="5">2019</option>
              <option value="6">2018</option>
            </Form.Select>
            <Button
              id="btn-cari"
              variant="light"
              style={{ backgroundColor: "#F0f0f0" }}
            >
              <FaSearch />
            </Button>
          </InputGroup>

          <div className="table-container">
            <BootstrapTable responsive striped bordered hover>
              <thead>
                <tr>
                  <th
                    style={{ width: "5%", whiteSpace: "nowrap" }}
                    onClick={() => handleSort("no")}
                    className="sortable"
                  >
                    No{" "}
                    {noOrder === "asc" ? (
                      <FaSortUp />
                    ) : noOrder === "desc" ? (
                      <FaSortDown />
                    ) : (
                      <FaSort />
                    )}
                  </th>
                  <th
                    style={{ width: "20%", whiteSpace: "nowrap" }}
                    onClick={() => handleSort("status")}
                    className="sortable"
                  >
                    Status{" "}
                    {statusOrder === "asc" ? (
                      <FaSortUp />
                    ) : statusOrder === "desc" ? (
                      <FaSortDown />
                    ) : (
                      <FaSort />
                    )}
                  </th>
                  <th
                    style={{ width: "40%", whiteSpace: "nowrap" }}
                    onClick={() => handleSort("judul")}
                    className="sortable"
                  >
                    Judul{" "}
                    {judulOrder === "asc" ? (
                      <FaSortUp />
                    ) : judulOrder === "desc" ? (
                      <FaSortDown />
                    ) : (
                      <FaSort />
                    )}
                  </th>
                  <th
                    style={{ width: "30%", whiteSpace: "nowrap" }}
                    onClick={() => handleSort("tanggal")}
                    className="sortable"
                  >
                    Tanggal Pengundangan{" "}
                    {dateOrder === "asc" ? (
                      <FaSortUp />
                    ) : dateOrder === "desc" ? (
                      <FaSortDown />
                    ) : (
                      <FaSort />
                    )}
                  </th>
                </tr>
              </thead>
              {displayedData.length > 0 ? (
                <tbody>
                  {displayedData.map((item) => (
                    <tr
                      key={item.no}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(item)}
                    >
                      <td>{item.no}</td>
                      <td
                        style={{
                          color:
                            item.status === "Berlaku" ? "#5BAD43" : "#96185B",
                        }}
                      >
                        {item.status}
                      </td>
                      <td>{item.judul}</td>
                      <td>{item.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="4">Tidak ada data yang tersedia.</td>
                  </tr>
                </tbody>
              )}
            </BootstrapTable>
          </div>

          <Pagination className="mt-3 justify-content-center">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Form>
      </Container>

      {/* Modal untuk menampilkan dokumen */}
      <Modal show={showDocumentModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ overflowWrap: "break-word" }}>
            Dokumen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowWrap: "break-word" }}>
          {/* Tampilkan dokumen atau konten yang sesuai dengan data yang dipilih */}
          {selectedData && (
            <div>
              <h5>{selectedData.judul}</h5>
              {/* Tambahkan konten dokumen atau tautan ke dokumen di sini */}
              {/* Contoh: */}
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                  "URL_DOKUMEN"
                )}&embedded=true`}
                title="Dokumen"
                width="100%"
                height="500px"
              ></iframe>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableComp;
