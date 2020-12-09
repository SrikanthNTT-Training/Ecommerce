import React ,{Component} from 'react';
import ShowProduct from './ShowProduct';
import './Products.css';

class Product extends Component{

   
    render()
    {
        
        const {productslist} =this.props;
        //console.log(productslist);

        return(
            <div className='products'>
           {
               
                productslist.map(item =>{
                    return(
                        
                       <ShowProduct 
                       key={item.productId}
                       id={item.productId}
                       name={item.productName}
                       price={item.price}
                       img={item.imageRefPath} 
                       productQuantity={this.props.productQuantity}
                       />
                
                    )
                    
                })
           }
           
            </div>
            
        );
    }
}

export default Product;