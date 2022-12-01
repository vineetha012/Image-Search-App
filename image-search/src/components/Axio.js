import React, { useEffect, useState } from "react";
import axios from "axios"
const Axios=(param)=>{
    const [response,setresponse]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,seterror]=useState('')
    axios.defaults.baseURL='https://api.unsplash.com';
    const fetchData=async(url)=>{
        try {
            setIsLoading(true)
            const res=await axios(url)
            setresponse(res.data.results)
        } catch (error) {
            seterror(error)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchData(param)
    },[param])
    return{
        response,
        isLoading,
        error,
        fetchData:url=>fetchData(url)
    }
}
export default Axios