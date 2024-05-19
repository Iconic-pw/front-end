import axios from "axios";

 import { useState, useEffect } from "react";

function About() {
  const [ourData, setOurData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOurData = () => {
    const serverURL = `https://back-end-iwii.onrender.com/getOurCards`;
    axios
      .get(serverURL)
      .then((response) => {
        setOurData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getOurData();
  }, []);
  return <></>;
}

export default About;
