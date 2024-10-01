import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards'
import axios from 'axios';

export default function App() {
  let [Data,setData] = useState([]);
  const fetchedData = async() =>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
  }
  useEffect(()=>{
    fetchedData()
  },[])
  return (
      <>
      <ScrollView>
        <Text style={{textAlign:"center",fontSize:25,marginTop:10,fontWeight:800}}>
          E-commerce Store
        </Text>
     {
      Data.map((e,i)=>{
        return(
          <View key={i}>
            <Cards image={e.image} 
            title = {e.title}
            desc = {e.description}

            />
          </View>
        )
      })
     }

      </ScrollView>
      </>
    )
}