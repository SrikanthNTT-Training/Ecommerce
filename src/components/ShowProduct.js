import React ,{Component} from 'react';
import './Products.css';
import Counter from './Counter';

class ShowProduct extends Component{

    render (){

        let image = this.props.img;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.productQuantity;
        return (
            <div className="product">
              <div className="product-image">
                <img
                  src={image}
                  alt={this.props.name} />
                  </div>
                  <h4 className="product-name">{this.props.name}</h4>
                  <p className="product-price">₹ {this.props.price}</p>
                  <Counter productQuantity={quantity} />
                  <div className="product-action">
                  <button type="button" >Add to Cart</button>
                  </div>
                 </div>

        )
    }
}

export default ShowProduct;