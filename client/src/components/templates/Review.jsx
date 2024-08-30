import React from "react";


const ReviewCard = ({ review }) => {
    const { reviewerName, comment, date } = review;

    return (
        <div style={styles.card}>
            <h3 style={styles.name}>{reviewerName}</h3>
            <p style={styles.comment}>{comment}</p>
            <p style={styles.date}>{new Date(date).toLocaleDateString()}</p>
        </div>
    );
};


const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
    },
    name: {
        margin: "0 0 8px 0",
        fontSize: "1.2em",
    },
    comment: {
        fontSize: "1em",
        margin: "8px 0",
    },
    date: {
        color: "#777",
        fontSize: "0.9em",
    },
};


const App = () => {
    const review = {
        reviewerName: "Juan Pérez",
        rating: 4,
        comment: "La comida estuvo excelente, pero el servicio podría mejorar.",
        date: "2023-08-25",
    };

    return (
        <div>
            <h1>Reseñas del Restaurante</h1>
            <ReviewCard review={review} />
        </div>
    );
};

export default App;