import React, { useContext, useState } from "react";
import { Bkmarkcontext } from "./bkmarkcontext";
import { Updatebkmarkimg } from "./bookmark";

const Imagec=({data,setsrc,srccon})=>{
   // const {bookmarkimgs, setbookmarkimgs}=useContext(Bkmarkcontext)
   const src=data.cover_photo.urls.small
    const bookmarkhandler=(e)=>{
    //    Updatebkmarkimg(src)
        console.log(e.target.src)
        setsrc([...srccon,e.target.src])
    }
    
    return(
        <>
            <img src={src} className="images" value={src} onClick={(e)=>bookmarkhandler(e)}/>
        </>
    )
}
export default Imagec
