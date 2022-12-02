import React, { createContext, useState } from "react";
import Search from './search';
import Imagescontainer from './imagecontainer';
import Axios from './Axio';
import { BookMarkContainer } from "./bookmark";
export const ImageContext = createContext();


export function ImageSerachImagesHome() {
    const [bookmarkimgs,setbookmarkimgs]=useState([])
    const { response, error, fetchData } = Axios(`search/collections?page=1&query=fizz&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=50`)
    //console.log(response);
    const value = {
        response,
        error,
        fetchData,
        bookmarkimgs,setbookmarkimgs
    }
    return (
        <>
            <ImageContext.Provider value={value}>
                <Search />
                <Imagescontainer/>
            </ImageContext.Provider>

        </>
    )

}
