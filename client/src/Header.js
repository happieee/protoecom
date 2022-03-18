import React from 'react'
import { Link } from 'react-router-dom'
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import "./Header.css"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}]= useStateValue()
    const login =()=>{
        auth.signOut()
    }
  return (
    <nav className="header">
        <Link to="/">
        <img className="header_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png"
        alt=""
        >
        </img>
        </Link>
        <div className='header_search'>
        <input type="text" placeholder='Search for Anything' className='header_searchInput' />
    <SearchIcon className="header_searchIcon" ></SearchIcon>
        </div>
            <div className='header_nav'>
                {/* {1st link} favorite button */}
                
               
            <Link to="/favourites" className='header_link'>
                <div className='headerOptionfav'>
                 <FavoriteBorderOutlinedIcon style={{ color: 'black' }}/>
                </div>
                </Link>

                <Link to={!user && "/login"} className='header_link'>
                <div onClick={login} className='headerOption'>
                <span className='header_option_l0'>Hello {user?.email} </span>
                <span className='header_option_l9'>{user ? "LogOut" : "Sign In"} </span>

                <span className='header_option_l1'>
                <FaceOutlinedIcon style={{ color: 'black' }}/>
                </span>
                </div>
                </Link>

                <Link to="/checkout" className='header_link'>
                <div className='headerOptionBasket'>
                
                <span className='header_option_l2' >
                <ShoppingBasketIcon style={{ color: 'black' }}/>
                </span>
                <span className='headeroptionl5 basket_count'>{basket?.length}</span>
                </div>
                </Link>
                <Link to="/seller" className='header_link'>
                <div className='headerOption'>
                    
                <span className='header_option_l3'>
                <StorefrontOutlinedIcon style={{ color: 'black' }}/>
                </span>
                </div>
                </Link>

                
            </div>
        </nav>
  )
}

export default Header