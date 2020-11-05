import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContentError404: React.FC = () => {
  return (
    <Row>
      <Col lg={3} />
      <Col lg={6}>
        Error 404 - content page not found.
        <div className='text-center mt-3'>
          <img src='/404.jpg' width={512} />
        </div>
      </Col>
      <Col lg={3} />
    </Row>
  );
};

export default ContentError404;