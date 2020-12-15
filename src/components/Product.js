import React from 'react';
//import ShowProduct from './ShowProduct';
import './Products.css';
import Counter from './Counter';
import {useState} from 'react';
import Cart from './Cart';

function Product(props){
    const {productslist} =props;
    const [cart,setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
   
    const addToCart = (product)=>{
        setCart([...cart,product]);
    };

    const openCart = () => {
        setCartOpen(true)
    }

    const closeCart = () => {
        setCartOpen(false)
    }

    const deleteFromCart = (id) => {
       
            setCart(cart.filter(c => c.productId !== id));
       
        console.log(cart.productId);
        console.log(id);
    }
     return(
            <div>
            
                <button className="cartButton"
                onClick={openCart}>Go to Cart({cart.length})</button>
            
            <div className='products'>
           {     
                productslist.map((item,index) =>{
                    return(
                        
                        <div className="product" key={index} >
                        <div className="product-image">
                          <img
                            src={item.imageRefPath}
                            alt={item.productName} />
                            </div>
                            <h4 className="product-name">{item.productName}</h4>
                            <p className="product-price">₹ {item.price}</p>
                             {/* <Counter productQuantity={props.productQuantity} updateQuantity={props.updateQuantity}/>  */}
                            <div className="product-action">
                            {/* <button type="button" onClick={()=>addToCart(item, props.productQuantity)}  */}
                            <button type="button" onClick={()=>addToCart(item)}
                            >Add to Cart</button>
                            </div>
                           </div>
                    )
                    
                })
           }
           <Cart open={cartOpen} cart={cart} closeHandler={closeCart} deleteFromCart={deleteFromCart} len={cart.length}/>
            </div>
            </div>
        );
    }


export default Product;