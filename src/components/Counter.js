import React , { Component } from 'react';
import { connect } from "react-redux";


class Counter extends Component{

    state = {
        value : this.props.productQuantity,
        counter :0,
        id:this.props.id
    }

    render ()
    {
        return (
            <div className="stepper-input">
                   
                    <a href="#" className="decrement" onClick={this.props.onDecrementCounter}>-</a>
                    <input className="quantity" type="number" value={this.props.ctr}></input>
                    <a href="#" className="increment" onClick={this.props.onIncrementCounter}>+</a>
            </div>

        );
    }

}
const mapStateToProps = state => {
   return{
    ctr :state.counter
   };
};
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter : () => dispatch({type:"INCREMENT"}),
        onDecrementCounter : () => dispatch({type:"DECREMENT"})
        };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);