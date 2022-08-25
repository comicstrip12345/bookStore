import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 logo d-flex align-items-center'>
                        <h1>book<span>Store</span></h1>
                    </div>
                    <div className='col-4 why d-flex align-items-center'>
                        <div>
                            <h1>Why book<span>Store</span>?</h1>
                            <p><strong>bookStore</strong> is a online store for book lovers who want to learn more stories and facts from all around the world</p>
                        </div>
                    </div>
                    <div className='col-4 options d-flex align-items-center'>
                        <div style={{marginLeft:"auto",marginRight:"auto"}}>
                            <p><a href='#/'>About</a></p>
                            <p><a href='#/'>Customer Care</a></p>
                            <p><a href='#/'>Contact Us</a></p>
                            <p><a href='#/'>Previous Order</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='miniFooter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 copyright'>
                            <p>&copy;Copyright 2022 bookStore. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer