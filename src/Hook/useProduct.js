import { useEffect, useState } from "react"

const useProduct=()=>{
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('https://serene-meadow-46375.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return [services, setServices]
}
export default useProduct