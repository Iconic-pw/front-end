import body from '../../images/about card/body.png'
import border from '../../images/about card/border.png'
import axios from "axios";
import './EmpCard.css'
// import test from '/home/zaid/project-week/front-end/src/images/test.png'
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
    <div className='image'>
        {/* <img className='border' src = {border}/> */}
         <div className='card' ></div>
    </div>
    </>)
}