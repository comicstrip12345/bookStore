import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPrice, addPriceDetails } from './bookShop'
import Modal from './Modal'
import Swal from 'sweetalert2'
import { toast,ToastContainer } from 'react-toastify'
import { Popover } from 'antd'
import 'antd/dist/antd.css';

const Books = () => {
    const [bookValue,setBookValue]=useState(1)
    const [bookSearch,setBookSearch]=useState([])
    const user = useSelector((state)=>state.book.user)
    const dispatch = useDispatch()

    const onSubmit=(e)=>{
        e.preventDefault()
        const cartItems = user.filter((item)=>e.target.name === item.title)
        const cartId = Math.floor(Math.random() * 1000)
        const updCartItems = cartItems.map((item)=>({...item,updPrice:e.target.value,cartId}))
        dispatch(addPrice(e.target.value))
        dispatch(addPriceDetails(updCartItems))
        toast.success('Book added to the cart', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored'
        });
    }
    const onChange=(e)=>{
        const searchFilt = user.filter((item)=>e.target.value.toLowerCase() === '' ? item : item.title.toLowerCase().includes(e.target.value))
        setBookSearch(searchFilt)
    }
    const onAddBooks=(e)=>{
        e.preventDefault()
        setBookValue(bookValue + 1)
    }
    const onRemoveBooks=(e)=>{
        e.preventDefault()
        setBookValue(bookValue - 1)
        if(bookValue === 1){
            setBookValue(1)
        }
    }
    // const content = (
        
    // )
    return (
        <section className='books'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 title'>
                        <h1>Books</h1>
                    </div>
                    <div className='col-6 search'>
                        <form>
                            <input type="text" onChange={onChange}/>
                        </form>
                    </div>
                    {bookSearch == 0 ? 
                    user.map((item,index)=>(
                        <div key={index} className='col-3 book'>
                            <a data-bs-toggle="modal" href={`#exampleModal${index}`}>
                                <img src={item.images} alt=""/>
                                <h5>{item.title}</h5>
                                <p className='author'>by {item.author}</p>
                                <h6>P{item.price}.00</h6>
                            </a>
                            <Popover 
                                content={(
                                    <div className='popover-content'>
                                        <button className='red' onClick={onRemoveBooks}>-</button>
                                        <button className='add' name={item.title} value={item.price * bookValue} onClick={onSubmit}>{bookValue}</button>
                                        <button className='green' onClick={onAddBooks}>+</button>
                                    </div>
                                )} 
                                title='How many books you want?' 
                                trigger='click'
                            >
                                <button className='cart'>Add to cart</button>
                            </Popover>
                            <Modal 
                                id={`exampleModal${index}`} 
                                title={item.title} 
                                author={item.author} 
                                description={item.description} 
                                image={item.images} 
                                ratings={item.ratings} 
                                price={item.price} 
                                onClick={onSubmit}
                            />
                        </div>
                    )) :
                    bookSearch.map((item,index)=>(
                        <div key={index} className='col-3 book'>
                            <a data-bs-toggle="modal" href={`#exampleModal${index}`}>
                                <img src={item.images} alt=""/>
                                <h5>{item.title}</h5>
                                <p className='author'>by {item.author}</p>
                                <h6>P{item.price}.00</h6>
                            </a>
                            <button className='cart' value={item.price} onClick={onSubmit}>Add to cart</button>
                            <Modal 
                                id={`exampleModal${index}`} 
                                title={item.title} 
                                author={item.author} 
                                description={item.description} 
                                image={item.images} 
                                ratings={item.ratings} 
                                price={item.price} 
                                onClick={onSubmit}
                            />
                        </div>
                    ))    
                    }
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Books