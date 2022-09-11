import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addTotalPrice,deleteAllCartItems,addCODetails,addCarDetails} from './bookShop'
import CartItems from './CartItems'
import CartCOD from './CartCOD'
import CartCard from './CartCard'
import CartTotalPrice from './CartTotalPrice'
import CheckoutModal from './CheckoutModal'

const CartDetails = (props) => {
    const [address,setAddress]= useState("")
    const [name,setName]= useState("")
    const [contact,setContact]= useState("")
    const [payment,setPayment]= useState("")
    const [cdOwner,setcdOwner]= useState("")
    const [cdCVV,setcdCVV]= useState("")
    const [cdNum,setcdNum]= useState("")
    const cartItem = useSelector((state)=>state.book.priceDetails)
    const navigate = useNavigate()
    const totalPrice= useSelector((state)=>state.book.totalPrice)
    const priceRemoved= useSelector((state)=>state.book.priceRemoved)
    const dispatch = useDispatch()
    const price = useSelector((state)=>state.book.price)
    const totalprice = price.reduce((a, b) => a + b)
    const updPrice = totalprice - priceRemoved
    console.log(totalprice);
    console.log(updPrice);
    const deleteItems =(e)=>{
        e.preventDefault()
        dispatch(deleteAllCartItems())
    }
    const confirmCheckOut=(e)=>{
        e.preventDefault()
        if(payment === 'COD'){
            if(!name || !contact || !address){
                Swal.fire({
                    title: 'Enter COD Details',
                    icon:'error'
                })
            }
            else{
                Swal.fire({
                    title: 'You have chosen COD. Are you sure with this payment method?',
                    icon:'question' ,
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(addCODetails({
                        items: cartItem,
                        totalPrice,
                        address,
                        name,
                        contact
                    }))
                    navigate('/success')
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
                })
            }
        }
        else if(payment === 'Card'){
            if(!cdOwner || !cdNum || !cdCVV){
                Swal.fire({
                    title: 'Enter Card Details',
                    icon:'error'
                })
            }
            else{
                Swal.fire({
                    title: 'You have chosen Card. Are you sure with this payment method?',
                    icon:'question' ,
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(addCarDetails({
                        items: cartItem,
                        totalPrice,
                        cdOwner,
                        cdCVV,
                        cdNum
                    }))
                    navigate('/success')
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
                })
            }
        }
        else{
            console.log('Choose Mode of Payment');
        }
    }
    const onSetCOD =(e)=>{
        e.preventDefault()
        setPayment('COD')
    }
    const onSetCard =(e)=>{
        e.preventDefault()
        setPayment('Card')
    }
    const onSetAddress=(e)=>{
        setAddress(e.target.value)
    }
    const onSetName=(e)=>{
        setName(e.target.value)
    }
    const onSetContactNo=(e)=>{
        setContact(e.target.value)
    }
    const onSetOwner=(e)=>{
        setcdOwner(e.target.value)
    }
    const onSetCVV=(e)=>{
        setcdCVV(e.target.value)
    }
    const onSetCdNum=(e)=>{
        setcdNum(e.target.value)
    }
    console.log(payment);
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
                            <i className="bi bi-cart-x-fill"></i>
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
                                    updPrice={item.updPrice}
                                    id={item.cartId}
                                />
                            ))}
                            <hr style={{marginTop:"5vh"}}/>
                            <CartTotalPrice total={updPrice}/>
                            <button className='concheck' onClick={(e)=>{
                                e.preventDefault()
                                dispatch(addTotalPrice(totalprice))
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
                    <CartTotalPrice total={totalprice}/>
                    <h2 style={{marginBottom:"5vh"}}>Payment Options</h2>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <CartCOD 
                            onSetAddress={onSetAddress}
                            onSetName={onSetName}
                            onSetContactNo={onSetContactNo}
                            onSetCOD={onSetCOD}
                        />
                        <CartCard
                            onSetCard={onSetCard}
                            onSetCVV={onSetCVV}
                            onSetCdNum={onSetCdNum}
                            onSetOwner={onSetOwner}
                        />
                    </div>
                    <button className='concheck' data-bs-dismiss="offcanvas" onClick={confirmCheckOut}>Checkout</button>
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