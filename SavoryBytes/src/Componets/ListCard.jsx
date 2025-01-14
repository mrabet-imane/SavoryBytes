import React, { useEffect } from 'react';
import initialStateNormal from '../FichierRecepies/normalVf'; 
import Card from './Card';
import '../App.css'; 

const ListCard = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (cardTop < viewportHeight - 100) {
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="card-container">
      {initialStateNormal.map(recipe => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListCard;
