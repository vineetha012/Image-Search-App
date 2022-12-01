import React, { createContext } from 'react';
import Search from './search';
import Images from './imagecontainer';
import Axios from './Axio';
//create context
export const ImageContext=createContext();

const HomePage=()=>{
    const {response,isLoading,error,fetchData}=Axios(`search/collections?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=100`)
    console.log(response);
    const value={
        response,
        isLoading,
        error,
        fetchData
    }
    return(
        <><ImageContext.Provider value={value}>
            <Search/>
            <Images response={response}/>
        </ImageContext.Provider>
            
        </>
    )
}
export default HomePage;