//@ts-nocheck
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaUser, FaStar, FaTag } from "react-icons/fa";
import Navbar from "../Elements/navbar";

// Sample data with score and keywords

const SearchPage = () => {
  const [users, setusers] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/search?query=${encodeURIComponent(keywords)}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setusers(data.result);
        setFilteredUsers(data.result);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSeeDetails = (username: any) => {
    alert(`You clicked on ${username}. Show details for this user.`);
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0 rounded-4 p-4">
              <Card.Body>
                <h3 className="text-center text-primary mb-4">
                  Candidate Search
                </h3>

                <Form className="mb-4">
                  <Form.Group controlId="formKeywords">
                    <Form.Label>Enter Keywords</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Type keywords here..."
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-grid mt-3">
                    <Button variant="primary" onClick={handleSearch}>
                      Search
                    </Button>
                  </div>
                </Form>

                {filteredUsers.length === 0 ? (
                  <Card className="text-center p-3">
                    <p className="text-muted">No candidates found</p>
                  </Card>
                ) : (
                  <Row xs={1} md={2} className="g-4">
                    {filteredUsers.map((user) => (
                      <Col key={user.id}>
                        <Card className="shadow-sm border-0 rounded-3 h-100">
                          <Card.Body>
                            <div className="d-flex align-items-center mb-2">
                              <FaUser size={24} className="text-primary me-2" />
                              <Card.Title className="mb-0">
                                {user.username}
                              </Card.Title>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">
                              {user.email}
                            </Card.Subtitle>
                            <div className="d-flex align-items-center my-2">
                              <FaStar className="text-warning me-2" />
                              <span className="fw-bold">
                                Score: {user.score}
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <FaTag className="text-success me-2" />
                              <span>Keywords: {user.keywords.join(", ")}</span>
                            </div>
                            <Button
                              variant="outline-primary"
                              onClick={() =>
                                window.open(
                                  "http://127.0.0.1:5000/show/" + user.id,
                                  "_blank",
                                  "noopener"
                                )
                              }
                            >
                              See Details
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
