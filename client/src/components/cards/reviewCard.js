import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReviewCard = ({ review }) => {
    const { userId, text, score, createdAt } = review;





    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Usuario: {userId.name || "Anónimo"}</h5>{" "}

                <p className="card-text">
                    <StarRating rating={score} />{" "}

                </p>
                <p className="card-text">{text}</p>{" "}

                <p className="card-text">
                    <small className="text-muted">
                        Fecha: {new Date(createdAt).toLocaleDateString()}
                    </small>{" "}

                </p>
            </div>
        </div>
    );
};

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <span key={i} className="text-warning">
                    ★
                </span>
            ); // Estrella llena
        } else {
            stars.push(
                <span key={i} className="text-muted">
                    ★
                </span>
            ); // Estrella vacía
        }
    }
    return <span>{stars}</span>;
};

export default ReviewCard;
