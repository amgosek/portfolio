import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FaTiktok, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import logo from "../assets/img/newLogo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hunter-mcquaid/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://github.com/amgosek" target="_blank" rel="noopener noreferrer">
                <FaGithub size={16} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={16} />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}