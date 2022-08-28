import React from 'react'

const CartItems = ({images,title,author,price}) => {
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
                <h5>P{price}.00</h5>
            </div>
        </div>
    )
}

export default CartItems