import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
    const[{basket}]= useStateValue()
  return (
<div className='checkoutleft'>
    <div className='checkout'>
        {basket?.length===0 ?(

                <div>
                    <h2>
                        Your Shopping Basket is Empty
                    </h2>
                </div>
        
        ) :
        (
            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                {basket?.map((item)=>(
                    <CheckoutProduct 
                    id ={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}/>
                ))}       
            </div>
        )}
    </div>
    {basket.length>0 && (
        <div className='checkoutright'>
            <Subtotal/>
            </div>
    )}
</div>
  )
}

export default Checkout