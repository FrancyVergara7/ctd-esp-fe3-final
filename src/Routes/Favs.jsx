import React from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card'

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <>
      <Navbar />
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Favs;