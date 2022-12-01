import React, { useState } from "react";
import Bookmarks from "./bookmark";
import {createApi,toJson} from "unsplash-js"
const unsplash=new createApi({
    accesskey:"0XKLuqW25Oxmu-1KpXZl9X2J96iMKFzklB53pxgzBfg"
})
const Search = () => {
    const [searchkey,setsearchkey]=useState("")
    console.log(searchkey);
    const searchImages=async(e)=>{
        e.preventDefault();
        console.log("submit")
        // unsplash.search.getphotos(searchkey).then(toJson).then((json)=>{
        //     console.log(json);
        // })
    }
    return (
        <div className="main-search">
            <div className="head-bkmark">
                <h2>React Photo Search</h2>
                <Bookmarks/>
            </div>
            <form className="search-container" onSubmit={searchImages}>
                <input type="text" 
                placeholder="Search free high resolution images" 
                className="search"
                value={searchkey}
                onChange={(e)=>{
                    setsearchkey(e.target.value)
                    
                }}
                />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}
export default Search