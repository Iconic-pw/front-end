import './Home.css'
import light from '../../images/Light.png'
import Home1 from '../../images/Home1.png'
import employeeImage from '../../images/home2.png'

function Home() {
    return (
        <>
            <div className='upper-main'>
                <p><p className='first-word'>iconic </p> where you can easily view and explore a diverse collection of business cards, showcasing the unique identities of professionals and businesses</p>
                <img src={light} />
            </div>
            <div className='lower-main'>
                <p>what we provide</p>
                <div className='boxes'>
                    <div className='box'>
                        <img src={Home1} />
                        <p>searching jobs</p></div>
                    <div className='box'>
                        <img src={employeeImage} />
                        <p>finding employees</p></div>
                </div>
            </div>

        </>
    );
}

export default Home;