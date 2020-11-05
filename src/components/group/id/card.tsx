import React from 'react';
import Card from 'react-bootstrap/Card';

export interface IProps {
  groupId: number;
}

const GroupCard: React.FC<IProps> = ({ groupId }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Group {groupId}</Card.Title>
      </Card.Header>
      <Card.Body>
        This is the page for group {groupId}.
        Note, this is a community-only page.
      </Card.Body>
    </Card>
  );
};

export default GroupCard;