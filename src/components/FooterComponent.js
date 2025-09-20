import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = (props) => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md="6">
            <p>© {new Date().getFullYear()} My Website</p>
          </Col>
          <Col md="6" className="text-md-end">
            <a className="btn btn-social-icon btn-facebook me-2" href="https://facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="btn btn-social-icon btn-twitter me-2" href="https://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="btn btn-social-icon btn-instagram" href="https://instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
