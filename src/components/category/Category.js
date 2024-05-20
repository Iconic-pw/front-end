import axios from "axios";
import { useState, useEffect } from "react";
import './Category.css'
import EmpCard from "../emp card/EmpCard";
import Spinner from 'react-bootstrap/Spinner';

function Category({ category }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCardsByCategory = () => {

    const serverURL = `https://back-end-iwii.onrender.com/getCards/${category}`;
    axios
      .get(serverURL)
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
        console.log("here: ",response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCardsByCategory();
  }, [category]);

  return (<div className="category">
    {
      isLoading && <Spinner animation="border"/>
    }
    {
      !isLoading && categories.map(obj=><EmpCard isUpdate={true} clickedCard={obj}/>)
    }
    {/* <EmpCard /> */}
  </div>);
}

export default Category;
