import React from 'react';
import Card from 'react-bootstrap/Card';
import GroupCreateForm from './form';

const GroupCreateCard: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Group Create</Card.Title>
      </Card.Header>
      <Card.Body>
        <GroupCreateForm />
      </Card.Body>
    </Card>
  );
};

export default GroupCreateCard;