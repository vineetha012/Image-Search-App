import React, { useContext, useState } from "react";
import { Bookmarkbtn } from "./bookmark";
import { createApi, toJson } from "unsplash-js"
import { ImageContext } from "./contexts";
import { Link } from "react-router-dom";
const unsplash = new createApi({
    accesskey: "0XKLuqW25Oxmu-1KpXZl9X2J96iMKFzklB53pxgzBfg"
})
const Search = () => {
    const [searchkey, setsearchkey] = useState("")
    const { fetchData, bookmarkimgs, setbookmarkimgs } = useContext(ImageContext)
    //console.log(searchkey);
    const handlechange = (e) => {
        setsearchkey(e.target.value)
    }
    const searchImages = async (e) => {
        e.preventDefault();
        fetchData(`search/collections?page=1&query=${searchkey}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=50`)
        setsearchkey("")
        console.log("submit")
    }
    return (
        <div className="main-search">
            <div className="head-bkmark">
                <h2>React Photo Search</h2>
            </div>
            <div className="btn-con">
            <Link to="/bookmark">
                <Bookmarkbtn />
            </Link>
            </div>
            
            <form className="search-container" onSubmit={searchImages}>
                <div className="fields">
                    <input type="text"
                        placeholder="Search free high resolution images"
                        className="search"
                        value={searchkey}
                        onChange={handlechange}
                    />
                    <button type="submit" className="searchBtn">Search</button>

                </div>
            </form>
        </div>
    )
}
export default Search