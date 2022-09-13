import React from 'react'
import "./gallery.css"

import galleryData from "./gallery_data.js";

import galleryPhoto1 from "../../assets/gallery_photos/IMG_5376-2.jpg"
import galleryPhoto2 from "../../assets/gallery_photos/DSCN0764.JPG"
import galleryPhoto3 from "../../assets/gallery_photos/moon.jpg"
import filler from "../../assets/gallery_photos/filler.png"


const Gallery = () => {
    return (
    <div class='gallery'>
         {galleryData.map((element) => {
            return(
            <div class="gallery-photo">
                <img src={galleryPhoto1} />
                <img src={filler}/>
                <img src={galleryPhoto2} /><br></br>
                <img src={filler}/>
                <img src={galleryPhoto3}/>
                <img src={filler}/>
            </div>
            );}
            
         )}
    </div>
    );
}
    
export default Gallery
    