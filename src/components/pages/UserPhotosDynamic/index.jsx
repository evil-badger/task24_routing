import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const UserPhotosDynamic = () => {
    const {albumId}=useParams();
    const[photos, setPhotos]=useState(null);
    useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response=>response.json())
            .then(json=>setPhotos(json))
        },[]
    )

    console.log(photos);
    
    if(!photos){
        return<>No Album</>
    }

    return (
        photos.map(currentPhoto => (
            <div key={currentPhoto.id}>
              <Typography variant="body1">{currentPhoto.title}</Typography>
              <img src={currentPhoto.thumbnailUrl} alt={currentPhoto.title} />
            </div>
          ))
    )
}

export default UserPhotosDynamic
