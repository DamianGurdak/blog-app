import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} xs='12' md='6' lg='4'>
          <Card key={post.id} className='mt-4'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>
                {post.author} <br />
                <strong>Published: </strong>
                {post.publishedDate} <br />
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button variant='primary' as={Link} to={'/post/' + post.id}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
