import React,{Component} from 'react';
import axios from 'axios';
import Product from './Product';

class Products extends Component
{

state ={
    products :[] ,
    quantity :1 
}

getProducts(){
    let url="https://run.mocky.io/v3/f425646f-785d-485f-807f-11d7306395c0";
    
    axios.get(url).then(response =>{
        //console.log(response.data);
        this.setState (
           {
               products : response.data.products
           });
          // console.log(this.state.products);
    })
}
componentDidMount (){
    this.getProducts();
    
}


render()
{
    return(
        <div>
        <Product productslist={this.state.products}
        productQuantity={this.state.quantity}
        />
        </div>
    );
    
}


}

export default Products;