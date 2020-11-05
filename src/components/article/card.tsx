import React from 'react';
import Card from 'react-bootstrap/Card';

export interface IProps {
  text: string;
}

const ArticleCard: React.FC<IProps> = ({ text }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Article</Card.Title>
      </Card.Header>
      <Card.Body>
        {text}
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;