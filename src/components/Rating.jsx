import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function RatingStars({ product, currentRating, onRatingChange }) {
    console.log(product.id)
    const [value, setValue] = useState(currentRating);
    const handleRatingChange = async (e) => {
        const newRating = e.value;

        try {
            const response = await fetch(`http://127.0.0.1:8000/shop/api/productos/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + 'supersecret',
                },
                body: JSON.stringify({
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    rating: {
                        rate: newRating,
                        count: product.rating.count + 1,
                    },
                }),
    });

            if (response.ok) {
                setValue(newRating);

                if (onRatingChange) {
                    onRatingChange(newRating);
                }
            } else {
                console.error('Error al actualizar el rating del producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    };

    return (
        <div className='rating-div'>
            <Rating value={value} onChange={handleRatingChange} cancel={false} style={{ justifyContent: 'center' }} />
            <span style={{ marginLeft: '10px' }}>{value.toFixed(1)}</span>
        </div>

    );
}

        