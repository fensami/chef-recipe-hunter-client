import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import './BestDishes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleaddtoast = () => {
  toast('Added Favorite ')
}

const BestDishes = ({ dt }) => {

  const { id, ingradience, name, cooking, rating, food_image, bangladeshiRecipeName } = dt;
  return (
    <Container>
      <CardGroup className='w-75 mx-auto'>
        <Card className='mt-2'>
          <Card.Img className='w-75 mt-2 mx-auto' variant="top" src={food_image} />
          <Card.Body>
            <Card.Title className='text-primary fw-bold'>{name}</Card.Title>
            <p><span className='fw-bold'>Ingadience :</span> {ingradience}</p>
            <p> <span className='fw-bold'>Cooking Mathod : </span> {cooking}</p>
            <p><small className="text-muted">Rating : {rating}</small></p>
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleaddtoast}><FaHeart  className='favorite'></FaHeart>  <ToastContainer /></Button>
          </Card.Footer>
        </Card>

      </CardGroup>
     
    </Container>
  );
};

export default BestDishes;