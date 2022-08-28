import React from 'react'

const CartCard = () => {
    const fontStyle = {fontFamily:'Quicksand', fontWeight:'700', color:'black'}
    return (
        <>
            <button className='payment' data-bs-toggle="collapse" data-bs-target='#creditcard' aria-expanded="false" aria-controls="creditcard"><h5>Credit Card</h5></button><br/>
            <div className="collapse" id="creditcard">
                <div className="card card-body" style={{marginBottom:'3vh'}}>
                    <form style={{paddingBottom:'1vh'}}>
                        <div className='row'>
                            <div className='col-6'>
                                <label style={fontStyle}>Card Owner:</label><br/>
                                <input type="text" style={{width:"100%"}}/>  
                            </div>
                            <div className='col-6'>
                                <label style={fontStyle}>CVV:</label><br/>
                                <input type="number" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <label style={fontStyle}>Card Number:</label><br/>
                        <input type="text" style={{width:"100%"}}/><br/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CartCard