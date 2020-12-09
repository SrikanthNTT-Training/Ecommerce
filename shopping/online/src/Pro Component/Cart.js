import React from 'react';

export default function Cart(props) {

    console.log(props);

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
            height: '100%',
            display: 'flex',
            width: '100%',
            overflow: 'auto'
        }
    };
 
    return(
        <>
        <div style={{...styles.cardContainer}}>
            <header style={styles.header}>
                <h3>Cart</h3>
                <span style={{cursor: 'pointer', backgroundColor: 'red', padding: 5, color: '#fff'}} onClick={() => props.closeHandler()}>X</span>
            </header>
            <main style={styles.main}>
            {props.cart.map((product,index)=>(
                    <div className="product" key={index} style={{margin: '0 10px'}}>
                    <h3>{product.productName}</h3>
                    <h4>{product.price}</h4>
                    <img src={product.imageRefPath}alt={product.productName}/>
                    <br />
                    <button onClick={() => props.deleteFromCart(product.productId)}>
                        Remove
                    </button>
                    </div>
            ))}
            </main>
        </div>
        <div style={styles.backdrop}></div>
        </>
    );
}
