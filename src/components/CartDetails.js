import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addTotalPrice,deleteCartItems,addCODetails} from './bookShop'

const CartDetails = (props) => {
    const [address,setAddress]= useState("")
    const cartItem = useSelector((state)=>state.book.priceDetails)
    const navigate = useNavigate()
    const totalPrice= useSelector((state)=>state.book.totalPrice)
    const dispatch = useDispatch()
    const price = useSelector((state)=>state.book.price)
    const total = price.reduce((a, b) => a + b)
    const deleteItems =(e)=>{
        e.preventDefault()
        dispatch(deleteCartItems())
    }
    const confirmCheckOut=(e)=>{
        e.preventDefault()
        if(address){
            Swal.fire({
                title: 'You have chosen COD.',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addCODetails({
                    items: cartItem,
                    totalPrice,
                    address
                }))
                navigate('/success')
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
            })
        }
        else{
            Swal.fire({
                title: 'Please choose payment options'
            })
        }
    }
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id={props.id} aria-labelledby={props.id}>
            {!totalPrice?
            <>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title cart" id="offcanvasExampleLabel">Your Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {cartItem.map((item,key)=>(
                        <div className='row' key={key}>
                            <div className='col-3 cartimg'>
                                <img src={item.images} alt=""/>
                            </div>
                            <div className="col-5 cartdesc">
                                <h4>{item.title}</h4>
                                <p>{item.author}</p>
                            </div>
                            <div className='col-4 cartprice'>
                                <h5>P{item.price}.00</h5>
                            </div>
                        </div>
                    ))}
                    <hr style={{marginTop:"5vh"}}/>
                    <div className='row'>
                        <div className='col-7'>
                            <h3>Total:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>P{total}.00</h3>
                        </div>
                    </div>
                    <button className='concheck' onClick={(e)=>{
                        e.preventDefault()
                        dispatch(addTotalPrice(total))
                    }}>Checkout</button>
                </div>
            </>: 
            <>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title cart" id="offcanvasExampleLabel">Checkout</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='row' style={{marginBottom:"5vh"}}>
                        <div className='col-7'>
                            <h3>Total:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>P{total}.00</h3>
                        </div>
                    </div>
                    <h2 style={{marginBottom:"5vh"}}>Payment Options</h2>
                    <button className='payment' data-bs-toggle="collapse" data-bs-target='#cod' role="button" aria-expanded="false" aria-controls="cod"><h5>Cash on Delivery</h5></button><br/>
                    <div className="collapse" id="cod">
                        <div className="card card-body">
                            <form>
                                <label>Address</label> <br/>
                                <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
                            </form>
                        </div>
                    </div>
                    <button className='payment' data-bs-toggle="collapse" data-bs-target='#creditcard' role="button" aria-expanded="false" aria-controls="creditcard"><h5>Credit Card</h5></button><br/>
                    <div className="collapse" id="creditcard">
                        <div className="card card-body">
                            <form>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>Card Owner:</label><br/>
                                        <input type="text" style={{width:"100%"}}/>  
                                    </div>
                                    <div className='col-6'>
                                        <label>CVV:</label><br/>
                                        <input type="number" style={{width:"100%"}}/>
                                    </div>
                                </div>
                                <label>Card Number:</label><br/>
                                <input type="text" style={{width:"100%"}}/><br/>
                            </form>
                        </div>
                    </div>
                    <button className='concheck' onClick={confirmCheckOut}>Confirm</button>
                    <button className='back' onClick={deleteItems}>
                        <img src={require("../images/back.png")} alt=""/>
                    </button>
                </div>
            </>
            }
        </div>
    )
}

export default CartDetails