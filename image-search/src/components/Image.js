import React from "react";

const Imagec=({data})=>{
    return(
        <>
        
            <img src={data.cover_photo.urls.small} className="images"/>
        
        </>
    )
}
export default Imagec
