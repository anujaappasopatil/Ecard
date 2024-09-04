import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchItems = ({cart,setCart}) => {
  const {term}=useParams();
  const[fillteredData,setFillterData]=useState([]);
  
  useEffect (() =>{
    const filteredData = ()=>  {
      const data =items.filter((p) =>p.title.toLowerCase().includes(term.toLocaleLowerCase()));
      setFillterData(data);

    }
    filteredData();
  },[term])

  return (
   <Product cart={cart} setCart={setCart} items={fillteredData} />
  )
}

export default SearchItems
