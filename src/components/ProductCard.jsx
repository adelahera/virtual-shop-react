import React from 'react';
import { Card } from 'react-bootstrap';
import RatingStars from './Rating';
import '../App.css';        

const ProductCard = ({ product }) => {
  return (
    <Card className='card-container'>
    <div className='image-container'>
        <Card.Img
            variant="top"
            src={`../static/imagenes/${product.image}`}
        />
    </div>
    <Card.Body className='card-body'>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price} €</Card.Text>
        <RatingStars product={product} currentRating={product.rating.rate} onRatingChange={RatingStars.handleRatingChange} />
    </Card.Body>
    </Card>

  );
};

export default ProductCard;
 