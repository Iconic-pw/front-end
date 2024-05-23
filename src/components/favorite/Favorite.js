import { useEffect, useState } from "react"
import EmpCard from "../emp card/EmpCard";


export default function Favorite() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const key = "favs";
        const localData = localStorage.getItem(key) || [];
        setData(JSON.parse(localData));;
    }, [])

    return (
        <div className="category">
            {
                data.length == 0 && <p style={{color:"black", fontSize:"30px", textTransform:"none"}}>There is no favorites</p>
            }
            {
                data.length != 0 && data.map(obj => <EmpCard clickedCard={obj} isFavorite={true} type='2' />)
            }
        </div>
    )

}