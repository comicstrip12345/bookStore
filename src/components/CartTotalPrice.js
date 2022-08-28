import React from 'react'

const CartTotalPrice = ({total}) => {
    return (
        <div className='row' style={{marginBottom:"5vh"}}>
            <div className='col-7'>
                <h3>Total:</h3>
            </div>
            <div className='col-5'>
                <h3>P{total}.00</h3>
            </div>
        </div>
    )
}

export default CartTotalPrice