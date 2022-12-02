import React, { useEffect, useState } from "react";
import axios from "axios"
const Axios=(param)=>{
    const [response,setresponse]=useState([])
    const [error,seterror]=useState('')
    axios.defaults.baseURL='https://api.unsplash.com';
    const fetchData=async(url)=>{
        try {
            const res=await axios(url)
            setresponse(res.data.results)
        } catch (error) {
            seterror(error)
        }
    }
    useEffect(()=>{
        fetchData(param)
    },[param])
    return{
        response,
        error,
        fetchData:url=>fetchData(url)
    }
}
export default Axios