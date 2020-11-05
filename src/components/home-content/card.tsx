import NextLink from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

const HomeContentCard: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Content Homepage</Card.Title>
      </Card.Header>
      <Card.Body>
        Welcome to the content homepage.
        This is an example of a route with collisions (both sites have a "/" homepage).
        <div className='mt-2'>
          <NextLink href={process.env.COMMUNITY_DOMAIN_URL}>
            <a>See community homepage</a>
          </NextLink>
        </div>
        <div className='mt-2'>
          <NextLink href={`/articles/1`}>
            <a>See article 1 page</a>
          </NextLink>
        </div>
        <div className='mt-2'>
          <NextLink href={`/groups/1`}>
            <a>See group 1 page (should fail!)</a>
          </NextLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeContentCard;