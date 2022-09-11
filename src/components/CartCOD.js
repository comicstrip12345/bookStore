import React from 'react'

const CartCOD = ({onSetAddress,onSetName,onSetContactNo,onSetCOD}) => {
    const fontStyle = {fontFamily:'Quicksand', fontWeight:'700', color:'black'}
    return (
        <>
            <div className="accordion-item">
                <h5 className="accordion-header" id="flush-headingOne">
                    <button onClick={onSetCOD} className="accordion-button collapsed payment" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Cash on Delivery
                    </button>
                </h5>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <form style={{paddingBottom:'1vh'}}>
                            <div className='row'>
                                <div className='col-6'>
                                    <label style={fontStyle}>Name</label> <br/>
                                    <input type="text" onChange={onSetName} style={{width:'100%'}}/>
                                </div>
                                <div className='col-6'>
                                    <label style={fontStyle}>Contact #</label> <br/>
                                    <input type="text" onChange={onSetContactNo} style={{width:'100%'}}/>
                                </div>
                            </div>
                            <label style={fontStyle}>Address</label> <br/>
                            <input type="text" onChange={onSetAddress} style={{width:'100%'}}/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCOD