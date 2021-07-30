import React from 'react';

function Card(props) {
  
  const handleClick = () => {
    props.onCardClick(props.card);
  };
  
  return (
    <li className="element" key={props.card._id}>
      <button className="button button_type_image" type="button" onClick={handleClick}></button>
      <button className="button button_type_delete" aria-label="Удалить" type="button"></button>
      <img className="element__image" src={props.card.link} alt={props.card.name} />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="button button_type_like" aria-label="Лайк" type="button"></button>
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;