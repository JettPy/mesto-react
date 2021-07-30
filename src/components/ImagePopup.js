import React from 'react';

function ImagePopup(props) {
  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`} >
      <figure className="popup__figure dialog-window">
        <button className="button button_type_close" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name}/>
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup