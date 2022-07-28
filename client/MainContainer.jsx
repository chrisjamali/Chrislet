import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SetContainer from './components/setContainer';

const MainContainer = () => {
  return (
    <div>
      <Container fluid>
        {/* <Row>
          // <Col>
          // <SetContainer/>
          </Col>
        </Row> */}
        <SetContainer />
      </Container>
    </div>
  );
}

export default MainContainer