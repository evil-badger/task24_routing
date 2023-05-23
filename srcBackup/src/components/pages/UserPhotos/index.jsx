import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const UserPhotos = ({albumId}) => {
    const[photos, setPhotos]=useState([]);
    useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response=>response.json())
            .then(json=>setPhotos(json))
        },[]
    )

    console.log(photos);
    
    return (
        photos.map(currentPhoto => (
            <div key={currentPhoto.id}>
              <Typography variant="body1">{currentPhoto.title}</Typography>
              <img src={currentPhoto.thumbnailUrl} alt={currentPhoto.title} />
            </div>
          ))
    )
}

export default UserPhotos