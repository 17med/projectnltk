import { useState } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { FaUser, FaEnvelope, FaCalendar, FaFilePdf } from "react-icons/fa";
import Navbar from "../Elements/navbar";
import toast from "react-hot-toast";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    cv: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      cv: e.target.files[0],
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData();
    form.append("username", formData.name);
    form.append("email", formData.email);
    form.append("age", formData.age);
    if (formData.cv != null) {
      form.append("file", formData.cv);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        toast.success("applyed successfully!");
      } else {
        toast.error("applied failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("applied failed.");
    }
  };

  return (
    <>
      <Navbar />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Row className="justify-content-center w-100">
          <Col md={6} lg={4}>
            <Card className="p-4 shadow-lg border-0 rounded">
              <Card.Body>
                <h3 className="text-center mb-4 text-primary">
                  Job Application
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FaCalendar />
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        placeholder="Enter your age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formCV">
                    <Form.Label>Upload CV (PDF)</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FaFilePdf />
                      </InputGroup.Text>
                      <Form.Control
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">
                      Apply Now
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobApplicationForm;
