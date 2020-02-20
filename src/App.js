import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand, Jumbotron, Card, CardTitle, CardDeck, Badge, Button, CardBody, CardText, Row, Col } from 'reactstrap';

function App() {
  return (
    <>
      <Navbar color='danger' dark expand='md'>
        <Container fluid="md">
	        <NavbarBrand href='/'>Joshua Rieth</NavbarBrand>
        </Container>
			</Navbar>
		  <Container fluid='md'>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Joshua Rieth</h1>
            <p className="lead">Full Stack Web Developer</p>
          </Container>
        </Jumbotron>
        <section>
          <h2>Projects</h2>
          <Row>
      <Col lg="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
        </section>
        
      </Container>
    </>
	);
}
export default App;
