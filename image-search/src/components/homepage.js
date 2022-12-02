import React, { createContext, useState } from 'react';
import Search from './search';
import Images from './imagecontainer';
import Axios from './Axio';
import { BookMarkContainer } from './bookmark';
import { ImageSerachImagesHome } from './contexts';


const HomePage = () => {
    return (
        <>
            <ImageSerachImagesHome/>
        </>
    )
}
export default HomePage;