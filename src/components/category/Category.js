import axios from "axios";

import { useState, useEffect } from "react";

function Category({ category }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCardsByCategory = () => {
    const serverURL = `http://localhost:3004/getCards/${category}`;
    axios
      .get(serverURL)
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCardsByCategory();
  }, []);

  return <></>;
}

export default Category;
