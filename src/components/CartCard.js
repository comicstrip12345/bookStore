import React from 'react'

const CartCard = ({onSetCard,onSetCVV,onSetCdNum,onSetOwner}) => {
    const fontStyle = {fontFamily:'Quicksand', fontWeight:'700', color:'black'}
    return (
        <>
            <div className="accordion-item">
                <h5 className="accordion-header" id="flush-headingTwo">
                    <button onClick={onSetCard} className="accordion-button collapsed payment" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Card
                    </button>
                </h5>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <form style={{paddingBottom:'1vh'}}>
                            <div className='row'>
                                <div className='col-6'>
                                    <label style={fontStyle}>Card Owner:</label><br/>
                                    <input type="text" onChange={onSetOwner} style={{width:"100%"}}/>  
                                </div>
                                <div className='col-6'>
                                    <label style={fontStyle}>CVV:</label><br/>
                                    <input type="number" onChange={onSetCVV} style={{width:"100%"}}/>
                                </div>
                            </div>
                            <label style={fontStyle}>Card Number:</label><br/>
                            <input type="text" onChange={onSetCdNum} style={{width:"100%"}}/><br/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard