import axios from "axios";

// import { useState, useEffect } from "react";

function Card({ isUpdate, clickedCard }) {

  const updateFavorite = () => {
    const url = `http://localhost:3004/updateFavorite/${clickedCard.id}`;
    const data = {
      is_fav: isUpdate,
    };
    axios
      .put(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <></>;
}

export default Card;
