import React, { useEffect, useState } from 'react'
import '../componets/productlist.css'



export const Productlist = () => {
    let [Products,setProducts]=useState([]);
    let [url,Seturl]=useState("http://localhost:8000/products")

    function All() {
        Seturl("http://localhost:8000/products")
    }
    function Stock() {
        Seturl("http://localhost:8000/products?stock=true")
    }
    function AllanSolly() {
        Seturl("http://localhost:8000/products?name=Allen%20Solly")
    }
    function Ausk() {
        Seturl("http://localhost:8000/products?name=Ausk")
                
    }
    function Nicky() {
        Seturl("http://localhost:8000/products?name=Nicky")
        
    }
    function Puma() {
        Seturl("http://localhost:8000/products?name=Puma")
        
    }


useEffect(()=>{
   
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[url]);
  return (
   <div className='container'> 
   <div className='mt-5'>
   <span class="material-symbols-outlined">
tune
</span>
    <button onClick={All} className='btn btn-outline-secondary pt-2 m-2 '>All</button>
    <button onClick={Stock} className='btn btn-outline-secondary pt-2 m-2'>Stock</button>
    <button onClick={Ausk} className='btn btn-outline-secondary pt-2 m-2 '>Ausk</button>
    <button onClick={Nicky} className='btn btn-outline-secondary pt-2 m-2 '>Nicky</button>
    <button onClick={AllanSolly} className='btn btn-outline-secondary pt-2 m-2 '>AllanSolly</button>
    <button onClick={Puma} className='btn btn-outline-secondary pt-2 m-2 '>Puma</button>

   </div>
    
   {Products.map((product)=>{
    return(
        <div key={product.id} className='fetch '>
              <div className='card'style={{width:"18rem"}}>
                <img src={product.img} className="card-img-top img-fluid" alt="..." style={{width:"350px",height:"350px"}} /> 
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price : ${product.price}/-</p>
                    <button className="btn btn-primary" onClick={()=>alert(`You Want To Add ${product.name} in Your Card`)}>Add to Cart</button>
                    {/* <span className={product.stock ? " instock" : "outofstock"} >{product.stock}</span> */} 
                    <span className={product.stock ? "instock" : "outofstock"}>{product.stock ? "In_Stock" : "outof_Stock"}</span>
                    {console.log(product.stock)}
                </div>
            </div>   
        </div>
        
    )
   })}
  
 

   </div>
  )
}
