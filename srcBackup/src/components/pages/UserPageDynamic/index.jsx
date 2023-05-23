import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const UserPageDymanic = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    // не работает, если обьявить начальное состояние null

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
                .then(response => response.json())
                .then(json => setUser(json))
        }, []
    )

    console.log(user);
  
    return (
        <ul>{
            user.map((currentUser)=>{
                console.log(currentUser.id)
                return <>
                <li key={currentUser.id}>{currentUser.title}</li>
             <Link to={`${currentUser.id}`}>Show Albums</Link>
                </>
            })}
        </ul>
    )

}



export default UserPageDymanic