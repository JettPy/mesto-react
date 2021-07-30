import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`} >
      <div className="popup__content dialog-window">
        <button className="button button_type_close" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name="avatar" noValidate>
          <fieldset className="popup__set">
            {props.children}
            <button className="button popup__button" aria-label="Сохранить" type="submit">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
