import React from 'react'

const CheckoutModal = ({id}) => {
    return (
        <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutModal