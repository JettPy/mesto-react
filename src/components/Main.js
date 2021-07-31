import React from 'react';
import Card from './Card';
import { api } from '../utils/api.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((results) => {
        const [user, cards] = results;
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img alt="Аватар профиля" className="profile__avatar" src={userAvatar}/>
          <button className="profile__avatar-button" onClick={onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__status">{userDescription}</p>
            <button className="button button_type_edit" aria-label="Редактировать профиль" type="button" onClick={onEditProfile}></button>
          </div>
        </div>
        <button className="button button_type_add" aria-label="Добавить картинку" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="content__section">
        <ul className="elements">
          {cards.map((item) => (
            <Card card={item} onCardClick={onCardClick} key={item._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
