import React from 'react';

function Card({ card, onCardClick }) {
  
  const handleClick = () => {
    onCardClick(card);
  };
  
  return (
    <li className="element">
      <button className="button button_type_image" type="button" onClick={handleClick}></button>
      <button className="button button_type_delete" aria-label="Удалить" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button className="button button_type_like" aria-label="Лайк" type="button"></button>
          <p className="element__likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;