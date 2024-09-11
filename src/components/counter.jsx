import React, { useEffect, useState } from 'react'

export default function Counter() {
    let[count,setCount]=useState(0)
    let[products,setProducts]=useState([])
    console.log(products)

    const increment = ()=>{
            setCount(count+1)
    }

useEffect(
    ()=>{
         fetch('https://fakestoreapi.com/products')
         .then(res=>res.json())
         .then(data=>setProducts(data))
    }
,[])

  return (
    <div>
        <button onClick={increment}> + </button>
        <span> {count} </span>
        <button onClick={()=>{
            if (count>0) {
                setCount(count-1)
            }
        }}> - </button>
    </div>
  )
}