import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import loadRazorpay from '../utils/razorpay';

const CartPage = ({ cart, removeFromCart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  const handlePayment = () => {
    if (total > 0) {
      loadRazorpay(total, () => {
        setCart([]); // Clear the cart after successful payment
      });
    } else {
      alert("Cart is empty");
    }
  };

  return (
    <Container className="py-4">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup className="mb-3">
            {cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.title}</strong> - ₹{item.discountedPrice}
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>🗑 Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5>Total: ₹{total}</h5>
          <Button variant="success" onClick={handlePayment}>Pay Now</Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;