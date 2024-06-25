import React, { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={6} md={12} className="mb-4">
            <h3>Subscribe to my Newsletter<br />for a weekly fun fact!</h3>
          </Col>
          <Col lg={6} md={12}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                {status === 'sending' && <Alert variant="info">Sending...</Alert>}
                {status === 'error' && <Alert variant="danger">{message}</Alert>}
                {status === 'success' && <Alert variant="success">{message}</Alert>}
                <input 
                  value={email} 
                  type="email" 
                  name="email" 
                  autoComplete="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
