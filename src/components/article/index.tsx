import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArticleCard from './card';

export interface IProps {
  articleId: number;
}

const Article: React.FC<IProps> = ({ articleId }) => {
  // fetch using articleId

  // useGetArticleQUery

  const text = `Article ${articleId}`;

  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        <ArticleCard text={text} />
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default Article;