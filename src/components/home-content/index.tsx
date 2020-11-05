import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HomeContentCard from './card';

const HomeContent: React.FC = () => {
  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        <HomeContentCard />
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default HomeContent;