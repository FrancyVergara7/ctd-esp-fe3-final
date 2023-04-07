import { useState } from 'react';
import { routes } from '../routes';

const Card = ({ id, name, username }) => {
  const [isFav, setIsFav] = useState(false);

  
  const handleAddToFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push({ id, name, username });
    localStorage.setItem('favs', JSON.stringify(favs));
    setIsFav(true);
  };

  const handleClick = () => {
  window.location.href = `${routes.detail}/${id}`;
  };
  
  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="" width={200} />
      <h1 style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleClick}>
        {name}
      </h1>
      <h2 style={{ fontSize: '16px' }}>{username}</h2>
      <button className="favButton" onClick={handleAddToFav}>
        {isFav ? 'Agregado 😊' : 'Agregar a Favoritos⭐'}
      </button>
    </div>
  );
};

export default Card;



