
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
export default function EmpCard({ type, clickedCard }) {
  /*
    type values:
    1: category
    2: favorite
    3: admin
  */
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState('');
  const [heading, setheading] = useState('');

  const updateFavorite = () => {
    const url = `${process.env.REACT_APP_serverURL}/updateFavorite/${clickedCard.id}`;
    const data = {
      is_fav: false,
    };
    axios
      .put(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const key = 'favs';

  const saveToLocalStorage = () => {
    const sucessMessage = "Card marked as favorite successfully"
    const errorMessage = "Card already added to favorite"
    const sucessHeading = "Done"
    const errorHeading = "Failed"
    function save(data) { localStorage.setItem(key, JSON.stringify(data)); }
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

  const deleteCardFromDB = () => {
    const url = `${process.env.REACT_APP_serverURL}/deleteCard/${clickedCard.id}`;
    //   const data = {
    //     is_fav: isUpdate,
    //   };
    axios.delete(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteCardFromLocalStorage = () => {
    let result = JSON.parse(localStorage.getItem(key));
    const updatedData = result.filter(obj => obj.id !== clickedCard.id);
    localStorage.setItem(key, JSON.stringify(updatedData));
    window.location.reload();
  }

  const handleCloseModal = () => {
    setFlag(false);
  };

  return (<div className="emp-card">
    <div className="first-layer" style={{ backgroundImage: `url(${clickedCard.img})` }}>
      <div id="cover-entire-card">
        <div className="second-layer">
          <div className="text">
            <p class='card-name'> {clickedCard.card_name}
            </p>
            <p class='job-title'>{clickedCard.job_title}</p>
            <p class='level'>{clickedCard.card_level}</p>
          </div>
        </div>
        <div class='emp-buttons' style={{right:type==1?"15%":type==3?"7%":"24%"}}>
          <a href={clickedCard.portfolio}><img class='linkedin-icon' src={linkedinIcon} /></a>
          {
            type == 1 && <button className="add-to-favorite-btn" onClick={saveToLocalStorage}>Add to favorite</button>
          }
          {
            type == 2 && <button className="delete-from-favorite-btn" onClick={deleteCardFromLocalStorage}>Delete</button>
          }
          {
            type == 3 &&
             <button className="delete-from-favorite-btn" onClick={deleteCardFromDB}>Delete</button>
          }
          {
            type == 3 &&
            <button className="approve-btn" onClick={updateFavorite}>Approve</button>
          }
        </div>
      </div>

    </div>
    <MyModal show={flag} onHide={handleCloseModal} message={message} heading={heading} />
  </div>)
}