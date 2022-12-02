import React, { useContext, useEffect, useState } from "react";
//import { Bkmarkcontext } from "./bkmarkcontext";
export const Bookmarkbtn=()=>{
    return(
        <>  
            <button className="bkmrkbtn">Book marks</button>
        </>
    )
}
var arr1=[]
export function Updatebkmarkimg(arr){
    
    arr.map((src,key)=>{
        arr1.push(src)
    })
   
    return arr
}
console.log(arr1)
export function BookMarkContainer(){
 
    const [arr,setarr]=useState([])
    useEffect(()=>{
        
        setarr(arr1)
    },[])
    return(
        <>
            <div className="bookmarkconatiner">
                <h1>Image Search App</h1>
            </div>
            <div className="bcgr">
            <div className="bkmarkimage-cont">
                {arr.map((srcc,index)=>{
                    return(
                        <>
                        <img className="bkmrkimg" src={srcc} key={index}/>
                        </>
                    )
                })}
            </div>
            </div>
           
        </>
    )
}
