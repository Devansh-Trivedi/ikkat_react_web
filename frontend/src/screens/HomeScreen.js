import React, {useState, useEffect} from 'react';
import data from '../data.js' ;
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions.js';
// import Footer from '../Footer';


function HomeScreen(props){
  const [products,setproduct] = useState([]);
  

  useEffect(()=>{
   const fetchData = async () => {
     const {data} = await axios.get("/api/products");
     setproduct(data);
   }
   fetchData();
    return () =>{

    };  
  }, [])


    return (  
      <div> 
      <div>
       <ul className="products">
         { 
           products.map(product=>
         <li key={product._id}>
           <div className="product">
                <img src={product.image} className="product-image" alt="product" />
                <div className="product-name">
                <Link to={"/product/"+product._id}>{product.name}</Link> 
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}$</div>
                <div className="product-rating">{product.rating} stars ({product.review})</div>

            </div>
         </li>
         )
           
         }
         
         </ul>
       
        </div>
      
         {/* <Footer />; */}
</div>
    )

        }
export default HomeScreen;