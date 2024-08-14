import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import Card from '../../Components/Cards/Cards';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';


const Products = () => {
    let [Data,setData] = useState([]);
    useEffect(()=>{
        fetch()
    },[])
    const fetch = async ()=> {
        let fetchedData = await axios.get("https://fakestoreapi.com/products")
        setData(fetchedData.data)
    }
    console.log(Data)
    const Nvg = useNavigate()
    return (
        <>
     <Navbar/>
<div style={{marginTop : "100px", textAlign : 'center' }}>
    
{
        Data.map((e,i)=>{
            return (
                
                <div  onClick={()=>{Nvg(`/inner/${id}`)}} style={{display : 'inline-block'}} key={i}>

                    <Card
                    id={e.id} 
                     image={e.image}
                     category={e.category}
                      title={e.title}
                       description={e.description}
                       rating={e.rating.rate}
                       price={e.price}/>
                </div>

            )
            
        })
     }
    
</div>
    <div style={{marginTop : "50px"}}>
        <Footer/>
    </div>
    </>
  )
}

export default Products
