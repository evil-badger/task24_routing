import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


const UserAlbum = ({userId}) => {
    const[userAlbum, setUserAlbum]=useState([]);
    useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response=>response.json())
            .then(json=>setUserAlbum(json))
        },[]
    )

    return (
        <ul>{
            userAlbum.map((currentAlbum)=>{
                console.log(currentAlbum.id)
                return <>
                <li key={currentAlbum.id}>{currentAlbum.title}</li>
                <Link to={`${currentAlbum.id}`}>show selected album</Link>
                </>
            })}
        </ul>
    )
}

export default UserAlbum