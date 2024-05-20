import body from '../../images/about card/body.png'
import border from '../../images/about card/border.png'
import './TeamCard.css'
import test from '/home/zaid/project-week/front-end/src/images/test.png'
export default function TeamCard(){
    return (<>
    <div className='card'>
        {/* <img className='border' src = {border}/> */}
        <div className='border'> <img src={test}/></div> 
    </div>
    </>)
}