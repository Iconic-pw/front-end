import body from '../../images/about card/body.png'
import border from '../../images/about card/border.png'
import axios from "axios";
import './EmpCard.css'
import test from '/home/zaid/project-week/front-end/src/images/test.png'
import { cloneElement } from 'react';
import { click } from '@testing-library/user-event/dist/click';
// import emp_card from '/home/zaid/project-week/front-end/src/images/emp_card.png'
export default function EmpCard({ isUpdate, clickedCard }) {

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



  return (<>
    <div className="first-layer" style={{ backgroundImage: `url(${clickedCard.img})` }}>
      <div className="second-layer">
        <div className= "text">
        <p> {clickedCard.card_name}
        </p>
        </div>
      </div>
    </div>
  </>)
}