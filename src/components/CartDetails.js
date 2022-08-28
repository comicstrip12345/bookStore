import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addTotalPrice,deleteCartItems,addCODetails} from './bookShop'
import CartItems from './CartItems'
import CartCOD from './CartCOD'
import CartCard from './CartCard'
import CartTotalPrice from './CartTotalPrice'

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
    const onSetAddress=(e)=>{
        setAddress(e.target.value)
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
                    {cartItem.length === 0?
                        <div className='noItems'>
                            <i class="bi bi-cart-x-fill"></i>
                            <p>No books in the cart. Add more.</p>
                        </div>
                        :
                        <>
                            {cartItem.map((item,key)=>(
                                <CartItems
                                    key={key}
                                    images={item.images}
                                    title={item.title}
                                    author={item.author}
                                    price={item.price}
                                />
                            ))}
                            <hr style={{marginTop:"5vh"}}/>
                            <CartTotalPrice total={total}/>
                            <button className='concheck' onClick={(e)=>{
                                e.preventDefault()
                                dispatch(addTotalPrice(total))
                            }}>Checkout</button>
                        </>
                    }
                </div>
            </>: 
            <>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title cart" id="offcanvasExampleLabel">Checkout</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <CartTotalPrice total={total}/>
                    <h2 style={{marginBottom:"5vh"}}>Payment Options</h2>
                    <CartCOD onSetAddress={onSetAddress}/>
                    <CartCard/>
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