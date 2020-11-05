import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GroupCreateCard from './card';

const GroupCreate: React.FC = () => {
  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        <GroupCreateCard />
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default GroupCreate;