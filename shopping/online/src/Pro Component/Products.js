
import React, {useState} from 'react';
import Cart from './Cart';

function Products(){
    const [cart,setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    
    const[products, setProducts]=useState([
        {
			"productId": 1,
			"productName": "Tikka",
			"price": 251,
			"imageRefPath": "https://res.cloudinary.com/shraddhajoshi/image/upload/c_scale,h_173,w_150/v1606997222/tikka2_yesb4n.jpg",
			"thumbnailRef": "https://res.cloudinary.com/shraddhajoshi/image/upload/c_scale,h_173,w_150/v1606997222/tikka2_yesb4n.jpg"
		},
		{
			"productId": 2,
			"productName": "Desert",
			"price": 252,
			"imageRefPath": "https://res.cloudinary.com/shraddhajoshi/image/upload/c_scale,h_173,w_150/v1606997222/desert_mbhkd0.jpg",
			"thumbnailRef": "https://res.cloudinary.com/shraddhajoshi/image/upload/c_scale,h_173,w_150/v1606997222/desert_mbhkd0.jpg"
		},
	
    ]); 
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
    }

    return(
        <div>
            <header>
                <button onClick={openCart}>Go to Cart({cart.length})</button>
            </header>
           
        {/* <h1>Products</h1> */}
        <div className ="products">
        {products.map((product,index)=>(
            <div className="product" key={index}>
             <h3>{product.productName}</h3>
             <h4>{product.price}</h4>
             <img src={product.imageRefPath}alt={product.productName}/>
             <button
                onClick={()=>addToCart(product)}
                disabled={cart.find(c => c.productId === product.productId) !== undefined}
             >
                 Add to Cart
             </button>
            </div>
    ))}
    </div >    

    <Cart open={cartOpen} cart={cart} closeHandler={closeCart} deleteFromCart={deleteFromCart}/>
     </div>
      );
		}
export default Products;
