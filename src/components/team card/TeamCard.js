import axios from "axios";
import './TeamCard.css'
import linkedinIcon from '../../images/icons/linkedin.svg'
import test from '/home/zaid/project-week/front-end/src/images/test.png'
export default function TeamCard({ isUpdate, clickedCard }) {

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
        <div className="text">
          <p class='card-name'> {clickedCard.card_name}
          </p>
          <p class='job-title'>{clickedCard.job_title}</p>
          <p class='level'>{clickedCard.card_level}</p>
        </div>
        <div class='emp-buttons'>
          <a href={clickedCard.portfolio}><img class='linkedin-icon' src = {linkedinIcon}/></a>
          <button>Add to favorite</button>
        </div>
      </div>
    </div>
    </>)
}