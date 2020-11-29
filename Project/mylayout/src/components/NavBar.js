import React,{Component} from 'react';
import { NavLink ,Switch ,Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import './NavBar.css';

class NavBar extends Component
{
    state ={
        clicked :false
    }

    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
render()
{
    return(
        <div>
            <header>
                <nav className='Navbar'>
                    <div onClick={this.handleClick}>
                         <i className={this.state.clicked ?  'fas fa-times' : 'fas fa-bars'} />
                     </div>
                         <div className='text'><h2>Client</h2></div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <NavLink  to='/cart'>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home'>Sign In</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/cart' component={Cart} />
            </Switch>
           
            <div className='footer'>
                <p>All rights Reserved</p>
                </div>
        </div>
        
    );
}
}

export default NavBar;