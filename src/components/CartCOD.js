import React from 'react'

const CartCOD = ({onSetAddress}) => {
    const fontStyle = {fontFamily:'Quicksand', fontWeight:'700', color:'black'}
    return (
        <>
            <button className='payment' data-bs-toggle="collapse" data-bs-target='#cod' aria-expanded="false" aria-controls="cod"><h5>Cash on Delivery</h5></button><br/>
            <div className="collapse" id="cod">
                <div className="card card-body" style={{marginBottom:'3vh'}}>
                    <form style={{paddingBottom:'1vh'}}>
                        <div className='row'>
                            <div className='col-6'>
                                <label style={fontStyle}>Name</label> <br/>
                                <input type="text" onChange={onSetAddress} style={{width:'100%'}}/>
                            </div>
                            <div className='col-6'>
                                <label style={fontStyle}>Contact Number</label> <br/>
                                <input type="text" onChange={onSetAddress} style={{width:'100%'}}/>
                            </div>
                        </div>
                        <label style={fontStyle}>Address</label> <br/>
                        <input type="text" onChange={onSetAddress} style={{width:'100%'}}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CartCOD