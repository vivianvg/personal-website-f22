import React from 'react'
import "./gallery.css"

import galleryData from "./gallery_data.js";

import galleryPhoto1 from "../../assets/gallery_photos/IMG_5376-2.jpg"
import galleryPhoto2 from "../../assets/gallery_photos/DSCN0764.JPG"
import galleryPhoto3 from "../../assets/gallery_photos/moon.jpg"
import galleryPhoto4 from "../../assets/gallery_photos/IMG_1400.png"
import galleryPhoto5 from "../../assets/gallery_photos/flowerfield.jpg"
import galleryPhoto6 from "../../assets/gallery_photos/sheepherd.png"


const Gallery = () => {
    return (
    <div class='gallery'>
         {galleryData.map((element) => {
            return(
            <div class="gallery-photo">
                <img src={galleryPhoto1} />
                <img src={galleryPhoto4}/>
                <img src={galleryPhoto2} /><br></br>
                <img src={galleryPhoto5}/>
                <img src={galleryPhoto3}/>
                <img src={galleryPhoto6}/>
            </div>
            );}
            
         )}
    </div>
    );
}
    
export default Gallery
    