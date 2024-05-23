import axios from "axios";
import './TeamCard.css'
import linkedinIcon from '../../images/icons/Linkedin-team.png'
// import test from '/home/zaid/project-week/front-end/src/images/test.png'
export default function TeamCard({ imageUrl, card }) {
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

  return (

    // <div class='team-card' key={card.id}>
    //   <div className="first-layer" style={{ backgroundImage: `url(${imageUrl})` }}>
    //     <div className="second-layer">
    //       <div class='card-name'>{card.my_name}</div>
    //     </div>
    //   </div>
    // </div>
    <div className='team-card'>
      <div className="card-inner">
        <div className="first-layer" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="second-layer">
            <div className='card-name'>{card.my_name}</div>
          </div>
        </div>
        <div className="card-back">
          <div className="description">{card.describtion}</div>
          <a href={card.portfolio} className="portfolio" target="_blank" rel="noopener noreferrer">
            <img class='linkedin-icon' src={linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}