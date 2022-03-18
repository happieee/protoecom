import React from 'react'
import "./Home.css"
import Product from './Product'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function Home() {
  return (
    <div className='home'>
        <img className='homeImage' src="https://htmlcolorcodes.com/assets/images/colors/pastel-orange-color-solid-background-1920x1080.png"></img>

        {/* <Link to={!user && "/login"} className='header_link'>
                <div onClick={login} className='headerOption'>
                <span className='header_option_l0'>Hello {user?.email} </span>
                <span className='header_option_l9'>{user ? "LogOut" : "Sign In"} </span> */}
   
    <div className='homerow'>
    <Product
    id="1224"
    title="Am Book"
    price={11.96}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_heJBB_3h99NHZZttWHdY0clCCWeZIrtOg&usqp=CAU"
    />
    <Product
    id="1224"
    title="Am Book"
    price={11.96}
    image="https://media.glamour.com/photos/5fb44148a15b7765c94a9354/master/w_3200,h_1800,c_limit/lede_social%20(26).jpg"
    />
    <Product
    id="1224"
    title="Am Book"
    price={11.96}
    image="https://logicalharmony.net/wp-content/uploads/2019/08/drunk-elephant-vegan-products-lists-logical-harmony.jpg"
    />
    
    </div>
    </div>
  )
}

export default Home