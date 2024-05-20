import body from '../../images/about card/body.png'
import border from '../../images/about card/border.png'
import axios from "axios";
import './TeamCard.css'
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
    <div className='card'>
        {/* <img className='border' src = {border}/> */}
        <div className='border'> <img src={test}/></div> 
    </div>
    </>)
}