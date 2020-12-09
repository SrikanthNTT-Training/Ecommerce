import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as  GiIcons from 'react-icons/gi';

export const Sidebar =[
{
    title:'Home',
    path:'/home',
    icon:<AiIcons.AiFillHome/>,
    className :'nav-text'
},
{
    title:'About',
    path:'/about',
    icon:<GiIcons.GiDress/>,
    className :'nav-text'
},
{
    title:'Shop',
    path:'/shop',
    icon:<FaIcons.FaShirtsinbulk/>,
    className :'nav-text'
}

]