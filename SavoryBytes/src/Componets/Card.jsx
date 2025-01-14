import React from 'react';

const Card = ({ recipe }) => {
  return (
    <div key={recipe.id} className="card">
      <img
        src={recipe.picture}
        alt={recipe.recipeTitle}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} style={{ color: index < recipe.rating ? 'orange' : '#ccc' }}>★</span>
          ))}
        </div>
        <h2 className="card-title">
          {recipe.recipeTitle}
        </h2>
        <div className="card-date-comments">
          <div>
            <span>⏰</span>
            <p>{recipe.date}</p>
          </div>
          <div>
            <span>💬</span>
            <p>{recipe.comments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
