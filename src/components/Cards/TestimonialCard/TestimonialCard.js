import React from "react";
import "./TestimonialCard.css";


const TestimonialCard = ({ author, description, image, rating }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="testimonial-card" data-testid="testimonial-card">
            <div className="testimonial-rating">{renderStars()}</div>
            <div className="testimonial-card-container">
                <img className="testimonial-profile-picture" src={image} alt="author" height={50}></img>
                <p className="testimonial-card-author">{author}</p>
            </div>
            <p className="testimonial-description">{description}</p>
        </div>
    );
};

export default TestimonialCard;