import axios from "axios";
import { useState, useEffect } from "react";
import './Category.css'
import EmpCard from "../emp card/EmpCard";
import Spinner from 'react-bootstrap/Spinner';

function Category({ category }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCardsByCategory = () => {

    const serverURL = `${process.env.REACT_APP_serverURL}/getCards/${category}`;
    axios
      .get(serverURL)
      .then((response) => {
        setCategories(response.data.filter(obj=>!obj.is_fav));
        setIsLoading(false);
        console.log("here: ", response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCardsByCategory();
  }, [category]);

  return (
    <div>
      <p className="category-title">{category}</p>

      <div className="category">
        {
          isLoading && <Spinner className="my-spinner" animation="border" />
        }
        {
          !isLoading && categories.map(obj => <EmpCard type='1' isFavorite={false} clickedCard={obj} />)
        }
        {/* <EmpCard /> */}
      </div>
    </div>
  );
}

export default Category;
