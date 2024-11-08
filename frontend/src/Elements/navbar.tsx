
import { Navbar, Button, Container } from "react-bootstrap";
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ThemedNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container className="d-flex justify-content-between">
        {/* Left Section: Brand Logo */}
        <Navbar.Brand href="/" className="text-primary fw-bold">
          JobPortal
        </Navbar.Brand>

        {/* Right Section: Buttons */}
        <div className="d-flex">
          <Button
            variant="primary"
            className="me-3 d-flex align-items-center"
            onClick={() => {
              console.log("Search button clicked");
              navigate("/search");
            }}
          >
            <FaSearch className="me-1" /> Search
          </Button>
          <Button
            variant="outline-primary"
            className="d-flex align-items-center"
            onClick={() => {
              console.log("Search button clicked");

              navigate("/add");
            }}
          >
            <FaUserPlus className="me-1" /> Add Candidate
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default ThemedNavbar;
