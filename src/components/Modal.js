import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-4'>
                                <img src={props.image} alt=""/>
                            </div>
                            <div className='col-8'>
                                <h3>{props.title}</h3>
                                <p className='modalAuth'>{props.author}</p>
                                <p className='desc'>{props.description}</p>
                                <p className='rapr'>Ratings: <span className='discount'>{props.ratings}</span></p>
                                <p className='rapr'>
                                    Price: <span className='discount'>P{props.price}.00</span> <span className='price'>P{props.price / 0.5}.00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button value={props.price} onClick={props.onClick}>Add to cart</button>
                        <button data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal