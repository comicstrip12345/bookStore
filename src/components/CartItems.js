import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCartItems,removeCartItemPrice } from './bookShop'

const CartItems = ({images,title,author,price,updPrice,id}) => {
    const dispatch = useDispatch()

    const onRemoveItems=(e)=>{
        e.preventDefault()
        dispatch(removeCartItems(id))
        dispatch(removeCartItemPrice(updPrice))
    }
    return (
        <div className='row'>
            <div className='col-3 cartimg'>
                <img src={images} alt=""/>
            </div>
            <div className="col-5 cartdesc">
                <h4>{title}</h4>
                <p>{author}</p>
            </div>
            <div className='col-4 cartprice'>
                <button onClick={onRemoveItems}><i class="bi bi-x-lg"></i></button>
                <div className='cartPrice'>
                    <p>{price} x {updPrice / price}</p>
                    <h5>P{updPrice}.00</h5>
                </div>
            </div>
        </div>
    )
}

export default CartItems