
import axios from "axios";
import './EmpCard.css'
import MyModal from '../../components/my modal/MyModal.js'
import linkedinIcon from '../../images/icons/linkedin.svg'
import test from '/home/zaid/project-week/front-end/src/images/test.png'
import { cloneElement } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { json } from 'react-router-dom';
import { useState } from "react";
// import emp_card from '/home/zaid/project-week/front-end/src/images/emp_card.png'
export default function EmpCard({ isUpdate, clickedCard }) {

  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState('');
  const [heading, setheading] = useState('');

  const updateFavorite = () => {
    const url = `https://back-end-iwii.onrender.com/updateFavorite/${clickedCard.id}`;
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


  const saveToLocalStorage = () => {
    const key = 'favs';
    const sucessMessage = "Card marked as favorite successfully"
    const errorMessage = "Card already added to favorite"
    const sucessHeading = "Done"
    const errorHeading = "Failed"
    function save(data) {localStorage.setItem(key, JSON.stringify(data));}
    let result = localStorage.getItem(key);
    // debugger;
    if (result == null) {
      save([clickedCard]);
      setMessage(sucessMessage)
      setheading(sucessHeading)
    } else {
      result = JSON.parse(result);
      if (result.map(obj => obj.id).includes(clickedCard.id)) {
        setMessage(errorMessage)
        setheading(errorHeading)
      } else {
        result.push(clickedCard)
        save(result);
        setMessage(sucessMessage)
        setheading(sucessHeading)
      }
    }
    setFlag(true);
  }

  const handleCloseModal = () => {
    setFlag(false);
  };

  return (<>
    <div className="first-layer" style={{ backgroundImage: `url(${clickedCard.img})` }}>
      <div className="second-layer">
        <div className="text">
          <p class='card-name'> {clickedCard.card_name}
          </p>
          <p class='job-title'>{clickedCard.job_title}</p>
          <p class='level'>{clickedCard.card_level}</p>
        </div>
        <div class='emp-buttons'>
          <a href={clickedCard.portfolio}><img class='linkedin-icon' src={linkedinIcon} /></a>
          <button onClick={saveToLocalStorage}>Add to favorite</button>
        </div>
      </div>
    </div>
    <MyModal show={flag} onHide={handleCloseModal} message={message} heading={heading} />
  </>)
}