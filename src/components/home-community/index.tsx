import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HomeCommunityCard from './card';

const HomeCommunity: React.FC = () => {
  console.log('home community!')
  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        <HomeCommunityCard />
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default HomeCommunity;