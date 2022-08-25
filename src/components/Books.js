import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPrice, addPriceDetails } from './bookShop'
import Modal from './Modal'
import Swal from 'sweetalert2'

const Books = () => {
    const [book,setBook]=useState("")
    const [bookSearch,setBookSearch]=useState([])
    const user = useSelector((state)=>state.book.user)
    const dispatch = useDispatch()
    const onSubmit=(e)=>{
        e.preventDefault()
        const filt = user.filter((item)=>e.target.value === item.price)
        dispatch(addPrice(e.target.value))
        dispatch(addPriceDetails(filt))
        Swal.fire({
            icon:'success',
            text: 'Added to cart successfuly',
        })
    }
    const onChange=(e)=>{
        setBook(e.target.value)
    }
    const onSearch=(e)=>{
        e.preventDefault()
        const searchFilt = user.filter((item)=>book === item.title)
        setBookSearch(searchFilt)
    }
    return (
        <section className='books'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 title'>
                        <h1>Books</h1>
                    </div>
                    <div className='col-6 search'>
                        <form onSubmit={onSearch}>
                            <input type="text" onChange={onChange}/>
                            <button>Search</button>
                        </form>
                    </div>
                    {bookSearch == 0 ? 
                    user.map((item,index)=>(
                        <div key={index} className='col-3 book'>
                            <img src={item.images} alt=""/>
                            <a data-bs-toggle="modal" href={`#exampleModal${index}`}>
                            <h5>{item.title}</h5>
                            </a>
                            <p className='author'>by {item.author}</p>
                            <h6>P{item.price}.00</h6>
                            <button className='cart' value={item.price} onClick={onSubmit}>Add to cart</button>
                            <Modal id={`exampleModal${index}`} title={item.title} author={item.author} description={item.description} image={item.images} ratings={item.ratings} price={item.price} onClick={onSubmit}/>
                        </div>
                    )) :
                    bookSearch.map((item,index)=>(
                        <div key={index} className='col-3 book'>
                            <img src={item.images} alt=""/>
                            <a data-bs-toggle="modal" href={`#exampleModal${index}`}>
                            <h5>{item.title}</h5>
                            </a>
                            <p className='author'>by {item.author}</p>
                            <h6>P{item.price}.00</h6>
                            <button className='cart' value={item.price} onClick={onSubmit}>Add to cart</button>
                            <Modal id={`exampleModal${index}`} title={item.title} author={item.author} description={item.description} image={item.images} ratings={item.ratings} price={item.price} onClick={onSubmit}/>
                        </div>
                    ))    
                    }
                </div>
            </div>
        </section>
    )
}

export default Books