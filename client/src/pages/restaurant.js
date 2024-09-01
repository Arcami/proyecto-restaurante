import React, { useState, useEffect } from 'react';

const Reviews = ({ restaurantId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurantReviews = async () => {
            try {
                const response = await fetch(`http://localhost:5000/reviews?restaurantId=${restaurantId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }

                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantReviews();
    }, [restaurantId]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p>Error fetching reviews: {error}</p>;
    }

    return (
        <div id="reviews-container">
            {reviews.length === 0 ? (
                <p>No reviews found.</p>
            ) : (
                reviews.map((review) => (
                    <div key={review._id} className="review">
                        <p><strong>Score:</strong> {review.score}/5</p>
                        <p>{review.text}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Reviews;
