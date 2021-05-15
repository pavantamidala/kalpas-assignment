import React,{useEffect} from 'react'
import axios from 'axios'

function useFetch(offset,setData) {
    useEffect(()=>{
        axios.get(`https://api.first.org/data/v1/news?limit=10&$offset=${offset}`).then((res)=>{
            
            console.log(res.data.data)
            setData(res.data.data)
        })
    },[offset,setData])
    
}

export default useFetch
