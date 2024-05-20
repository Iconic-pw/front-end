import './AboutUs.css'
import logo from '../../images/logo light.png'
import axios from "axios";
 import { useState, useEffect } from "react";

export default function AboutUs() {
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
    return (<>
        <div className='section-1'>
            {/* <p><p className='first-word'>iconic,</p> where you can easily view and explore a diverse collection of business cards, showcasing the unique identities of professionals and businesses</p> */}
            <span><img src={logo} /><p>team</p><p className='sign'>&copy;</p></span>
            <div className='paragraph'>We are revolutionizing the way professionals connect. Join us in embracing the future of networking and creating lasting impressions in the digital age!</div>
            <button className='join-button'>Join us Now</button>
        </div>
        <div className='section-2'>
            <p className='title'>mission & vision</p>
            <div className='boxes'>
                <div className='mision'>
                    <div className='box-title'>our mision</div>
                    <div className='box-description'>Transform business cards with innovative, digital solutions for professionals.</div></div>
                <div className='vision'>
                    <div className='box-title'>our vision</div>
                    <div className='box-description'>Lead the future of networking through digital business card excellence.</div></div>
            </div>
        </div>
        <div className='section-3'>
            <p className='title'>about us</p>
            <p className='description'>We are Iconic, a diverse team of five innovators driven by a groundbreaking idea to revolutionize the world of business cards. Our mission is to modernize networking by making it simple for professionals to create, share, and manage business cards online. By offering a sleek, digital alternative to traditional paper cards, we aim to enhance the way people connect and make lasting impressions in the digital age. </p>
        </div>
        <div className='section-4'>
            <p className='title'>our team members </p>
        </div>
    </>
    )
}