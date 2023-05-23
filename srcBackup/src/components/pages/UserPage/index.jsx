import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Users = () => {
    const[users, setUsers]=useState([]);
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(json=>setUsers(json))
        },[]
    )

    return (
        <ul>{
            users.map((currentUser)=>{
                console.log(currentUser.id)
                return <>
                <li key={currentUser.id}>{currentUser.name}</li>
                <Link to={`${currentUser.id}`}>Show Albums</Link>
                </>
            })}
        </ul>
    )
}
export default Users