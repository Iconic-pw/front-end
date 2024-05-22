import axios from "axios";
import './TeamCard.css'
import linkedinIcon from '../../images/icons/linkedin.svg'
import test from '/home/zaid/project-week/front-end/src/images/test.png'
import testTeam from "/home/zaid/project-week/front-end/src/images/team test.jpeg"
export default function TeamCard() {

  const updateFavorite = () => {
    // const url = `https://back-end-iwii.onrender.com/updateFavorite/${clickedCard.id}`;
    const url = '';
    const data = {
      // is_fav: isUpdate,
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

  return (<div class='team-card'>
    <div className="first-layer" style={{ backgroundImage: `` }}>
      <div className="second-layer">
        {/* <div className="text">
          <p class='card-name'> Zaid Rajab
          </p>
          <p class='job-title'>Xyz</p>
          <p class='level'>ABC</p>
        </div>
        <div class='emp-buttons'>
          <a href='http://facebook.com'><img class='linkedin-icon' src={linkedinIcon} /></a>
          <button>Add to favorite</button>
        </div> */}
      </div>
    </div>
  </div>)
}