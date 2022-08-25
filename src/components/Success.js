import React from 'react'
import { useSelector } from 'react-redux'

const Success = () => {
    const codDetails = useSelector((state)=>state.book.codDetails)
    const codItems = codDetails.items
    const codTotalPrice = codDetails.totalPrice
    return (
        <article>
            
            <section className='success'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 image'>
                            <img src={require('../images/shopping.png')} alt=""/>
                        </div>
                        <div className='col-6 details d-flex align-items-center'>
                            <div>
                                <h1>Ordered Successfully</h1>
                                {codItems.map((item,index)=>(
                                    <div className='row cartCard'>
                                        <div className='col-2 itemImg'>
                                            <img src={item.images} alt=""/>
                                        </div>
                                        <div className='col-7 itemDet' key={index}>
                                            <h5>{item.title}</h5>
                                            <p>{item.author}</p>
                                        </div>
                                        <div className='col-2 itemPri'>
                                            <h5>P{item.price}.00</h5>
                                        </div>
                                    </div>
                                ))}
                                <hr style={{marginTop:"4vh"}}/>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h3>Total</h3>
                                    </div>
                                    <div className='col-4'>
                                        <h4>P{codTotalPrice}.00</h4>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 cod'>
                                        <h5>Payment Option: <span>Cash on Delivery</span></h5>
                                    </div>
                                    <div className='col-12 codAddr'>
                                        <p>Order to be delivered at {codDetails.address}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Success