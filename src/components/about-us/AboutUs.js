import './AboutUs.css'
import logo from '../../images/logo light.png'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TeamCard from '../team card/TeamCard.js';
import zaid from "../../images/team images/zaid.jpeg"
import hanan from "../../images/team images/Hanan.jpeg"
import hassan from "/home/zaid/project-week/front-end/src/images/team images/Hassan.jpeg"
import rawan from "../../images/team images/Rawan.jpg"
import roua from "../../images/team images/Roua.jpeg"
import { Spinner } from 'react-bootstrap';

export default function AboutUs() {
    const [ourData, setOurData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // Dynamically import images

    const getOurData = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getOurCards`;

        try {
            const response = await axios
                .get(serverURL)
            setOurData(response.data);
            console.log("ourData : ", ourData)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }

    };
    // 142
    useEffect(() => {
        getOurData();
    }, []);

    return (<>
        <div className='section-1'>
            {/* <p><p className='first-word'>iconic,</p> where you can easily view and explore a diverse collection of business cards, showcasing the unique identities of professionals and businesses</p> */}
            <span><img src={logo} /><p>team</p><p className='sign'>&copy;</p></span>
            <div className='paragraph'>We are revolutionizing the way professionals connect. Join us in embracing the future of networking and creating lasting impressions in the digital age!</div>
            <Link to="/form"><button className='join-button'>Join us Now</button></Link>
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
            <p className='description'>We are Iconic, a diverse team of five innovators driven by a groundbreaking idea to revolutionize the world of business cards. Our mission is to modernize networking by making it simple for professionals to create, share, and manage business cards online. By offering a sleek, digital alternative to traditional paper cards, we aim to enhance the way people connect and make lasting impressions in the digital age.</p>
        </div>
        <div className='section-4'>
            <p className='title'>our team members </p>
            <div className='team-cards'>
                {isLoading && <Spinner className="my-spinner" animation="border" />}
                {
                    !isLoading && <>
                        <TeamCard imageUrl={zaid} card={ourData[0]} />
                        <TeamCard imageUrl={hassan} card={ourData[4]} />
                        <TeamCard imageUrl={hanan} card={ourData[1]} />

                        <TeamCard imageUrl={rawan} card={ourData[2]} />
                        <TeamCard imageUrl={roua} card={ourData[3]} />
                    </>
                    // ourData.map(obj => <TeamCard card={obj} key={obj.id} />)
                }

            </div>
        </div>
    </>
    )
}