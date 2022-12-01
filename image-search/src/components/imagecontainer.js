import React, { useContext } from "react";
import { ImageContext } from "./homepage";
import Imagec from "./Image";
const Images=()=>{
    const {response,isLoading}=useContext(ImageContext)
    return(
        <><h1>results</h1>
            <div className="gridimage">
               { response.map((data,key)=><Imagec key={key} data={data}/>)}
            </div>
        </>
    )

}
export default Images