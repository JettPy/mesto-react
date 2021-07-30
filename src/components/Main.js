import React from 'react';
import Card from './Card';
import { api } from '../utils/api.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((results) => {
        setUserName(results[0].name);
        setUserDescription(results[0].about);
        setUserAvatar(results[0].avatar);
        setCards(results[1]);
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
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__status">{userDescription}</p>
            <button className="button button_type_edit" aria-label="Редактировать профиль" type="button" onClick={props.onEditProfile}></button>
          </div>
        </div>
        <button className="button button_type_add" aria-label="Добавить картинку" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="content__section">
        <ul className="elements">
          {cards.map((item) => (
            <Card card={item} onCardClick={props.onCardClick} key={item._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
