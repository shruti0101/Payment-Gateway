import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import courses from '../data/courses';
import CourseCard from '../components/CourseCard';

const Home = ({ addToCart }) => (
  <Container className="py-4">
    <h2 className="mb-4">Explore Our Courses</h2>
    <Row>
      {courses.map(course => (
        <Col md={6} lg={4} key={course.id}>
          <CourseCard course={course} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;
