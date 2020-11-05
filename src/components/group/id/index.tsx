import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GroupCard from './card';

export interface IProps {
  groupId: number;
}

const Group: React.FC<IProps> = ({ groupId }) => {
  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        <GroupCard groupId={groupId} />
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default Group;