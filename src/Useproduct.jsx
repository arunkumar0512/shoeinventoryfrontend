import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
    const [items, setItems] = useState([]);
     useEffect(()=>{
        fetchdata();
     },[]);

     const fetchdata =async(req,res)=>{
        await axios.get('https://shoeinventorybackend.onrender.com/api/get/product')
        .then((res)=>{
            setItems(res.data.data)
            setmessage(res.data.message)
        })
     }
    
    return [items, setItems];
}
export default useProducts;