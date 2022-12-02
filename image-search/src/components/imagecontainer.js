import React, { useContext, useEffect, useState } from "react";
import { ImageContext } from "./contexts";
import Imagec from "./Image";
import { Updatebkmarkimg } from "./bookmark";
const Imagescontainer=()=>{
    const {response,isLoading}=useContext(ImageContext)
    const [srccon,setsrc]=useState([])
    //console.log(srccon);
    useEffect(()=>{
        Updatebkmarkimg(srccon)
    },[srccon])
    return(
        <div className="main-img-cont">
        <h2>results</h2>
            <div className="gridimage">
               { response.map((data,key)=><Imagec key={key} data={data} srccon={srccon} setsrc={setsrc}/>)}
            </div>
        </div>
    )

}
export default Imagescontainer