import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container">
      <h2 className="home-title">Welcome to My Portfolio</h2>
      <div className="row">
        {/* Introduction Card */}
        <div className="col-md-12 mb-4 home-card">
          <Card>
            <Card.Body>
              <Card.Title>Tiago Pereira</Card.Title>
              <Card.Text>
                Web Developer based in Portugal, born in 1994.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Social Media Profiles */}
        <div className="col-md-4 home-card">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Button variant="primary" href="https://www.linkedin.com/in/tiagosilvestrepereira/"><Card.Title>LinkedIn</Card.Title></Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 home-card">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Button variant="secondary" href="https://github.com/T94P"><Card.Title>GitHub</Card.Title></Button>
            </Card.Body>
          </Card>
        </div>
        {/* Credentials */}
        <div className="col-md-4 home-card">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Button variant="danger" href="YOUR_CONTACT_PAGE_URL"><Card.Title>Contact</Card.Title></Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 home-card">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Button variant="success" href="LINK_TO_YOUR_RESUME"><Card.Title>Resume</Card.Title></Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-8 home-card">
          <Card>
            <Card.Body>
            <Card.Title></Card.Title>
              <Button variant="warning" href="LINK_TO_YOUR_PORTFOLIO"><Card.Title>Portfolio</Card.Title></Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
