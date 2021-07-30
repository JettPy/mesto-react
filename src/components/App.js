import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});

  };

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={(
        <>
          <input className="popup__input popup__input_field_name" type="text" name="name" placeholder="Имя" id="name-input" minLength="2" maxLength="40" required />
          <span className="popup__error name-input-error"></span>
          <input className="popup__input popup__input_field_status" type="text" name="status" placeholder="Статус" id="status-input" minLength="2" maxLength="200" required />
          <span className="popup__error status-input-error"></span>
        </>
      )}/>
      <PopupWithForm title="Новое место" name="element" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={(
        <>
          <input className="popup__input popup__input_field_title" type="text" name="title" placeholder="Название" id="title-input" minLength="2" maxLength="30" required />
          <span className="popup__error title-input-error"></span>
          <input className="popup__input popup__input_field_image" type="url" name="image" placeholder="Ссылка на картинку" id="image-input" required />
          <span className="popup__error image-input-error"></span>
        </>
      )} />
      <ImagePopup card={selectedCard} name="image" isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={(
        <>
          <input className="popup__input popup__input_field_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" id="avatar-input" required />
          <span className="popup__error avatar-input-error"></span>
        </>
      )} />
      <PopupWithForm title="Вы уверены?" name="delete" isOpen={false} onClose={closeAllPopups} />
    </>
  );
}

export default App;
