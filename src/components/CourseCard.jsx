import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ course, addToCart }) => (
  <Card className="mb-4 shadow-sm">
    <Card.Img variant="top" src={course.image} style={{ height: '180px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title>{course.title}</Card.Title>
      <Card.Text>
        <ul>
          {course.description.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </Card.Text>
      <p>
        <strong>Price: </strong>
        <span className="text-danger text-decoration-line-through">₹{course.originalPrice}</span>{' '}
        <span className="text-success">₹{course.discountedPrice}</span>
      </p>
      <Button variant="primary" onClick={() => addToCart(course)}>Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default CourseCard;
