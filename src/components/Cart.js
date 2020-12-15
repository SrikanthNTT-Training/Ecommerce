
import React, { useState } from 'react';
import './Cart.css';
import Popup from './Popup';

export default function Cart(props) {

  const[popup,setpopup] = useState(false);
    let total=0;
 
   
   // console.log(props);

    const styles = {
        cardContainer: {
            display: props.open ? 'block': 'none',
            width: '80vw',
            height: '80vh',
            backgroundColor: '#f4f4f4',
            position: 'absolute',
            top: '50%',
            left: '15%',
            transform: 'translateY(-50%)',
            fontSize: 15,
            padding: 20,
            zIndex: 4,
            boxShadow: '0 0 10px #000'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        backdrop: {
            display: props.open ? 'block': 'none',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#00000099',
            zIndex: -9999999999
        },
        main: {
            padding: 10,
            height: '390px',
            display: 'flex',
            width: '100%',
            overflow: 'auto'
        }
    };

    const sumTotalAmount = () =>{
        
        props.cart.map((c,index) =>{
            total = total+c.price;
            //console.log(total);
        }     
       
        )
               return total; 
    }

    const togglePopup = () =>{
      setpopup(!popup);
      }
  
  /*   const grouproduct = (products) =>{
         // console.log('products');
         // console.log(products);

          let localarray=[];
          let counter=0;
         
        
          products.filter((item, index) =>{
              console.log("item"+JSON.stringify(item) );
            if (products.indexOf(item) === index) {
                counter++;
                localarray.push(item, counter);
                console.log('locallarray');
                console.log(localarray);
            }
            counter=0;
           
          });
       
      
        localarray.forEach( (newproduct, index) => {
            console.log("see this="+JSON.stringify(newproduct));
            <div className="product" key={index} style={{margin: '0 10px'}}>
            <img src={newproduct.imageRefPath} alt={newproduct.productName}/>
            <h1>COUNT:{newproduct}</h1>
            <h3>{newproduct.productName}</h3>
            <h4>₹ {newproduct.price}</h4>
                <br />
            <button onClick={ () => props.deleteFromCart(newproduct.productId)}>
                Remove
            </button>
            </div>  
          })
       
    } */
  
  
   
    return(
        <>
        <div style={{...styles.cardContainer}}>
                <header style={styles.header}>
                    <h3>Cart</h3>
                    <span className='closeSymbol' onClick={() => props.closeHandler()}>X</span>
                </header>
                <table>
                <tbody>
                    <tr>
                        <td>No of Items</td>
                        <td>:</td>
                        <td>{props.len}</td>
                    </tr>
                    <tr>
                    <td>Sub Total</td>
                        <td>:</td>
                        <td>{sumTotalAmount()}</td>
                    </tr>
                    </tbody>
                </table>
                <main style={styles.main}>
                {/* {props.cart.map((product,index)=>(   */}
                      {/* {grouproduct(props.cart)}  */}

                      {props.cart.map((product,index)=>(
                          props.cart.indexOf(product) === index ?
                    <div className="product" key={index} style={{margin: '0 10px'}}>
                   
                    <img src={product.imageRefPath}alt={product.productName}/>
                    <h3>{product.productName}</h3>
                    <h4>{product.price}</h4>
                    <br />
                    <button onClick={() => props.deleteFromCart(product.productId)}>
                        Remove
                    </button>
                    </div> : ''
            ))} 
                        
                {/* ))} */}
                </main>
                <br /> 
               
                <div>
                    {props.cart.length >= 1 ? <button type="button" onClick={togglePopup}>Proceed To Checkout</button> : ''}

                    {popup ? <Popup text='Close Me' closePopup={togglePopup} /> : null
        }
                </div>
            
        </div>
        <div style={styles.backdrop}></div>
        </>
    );
}
