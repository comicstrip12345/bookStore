// import React from 'react'
import Books from './Books'

const Hero = () => {
    return (
        <article>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-7 image'>
                            <img src={require("../images/studying.png")} alt="study"/>
                        </div>
                        <div className='col-5 details'>
                            <h1>50% <span>OFF</span></h1>
                            <h2>Get your favorite book at a <span>discounted</span> price.</h2>
                            <div className='row' style={{marginTop:"5vh"}}>
                                <div className='col-3 featImg'>
                                    <img src={require("../images/delivery.png")} alt=""/>
                                </div>
                                <div className='col-9 featDesc d-flex align-items-center'>
                                    <h5>Free Delivery and Less Hassle</h5>
                                </div>
                                <div className='col-3 featImg'>
                                    <img src={require("../images/cash-register.png")} alt=""/>
                                </div>
                                <div className='col-9 featDesc d-flex align-items-center'>
                                    <h5>Fast Payment Transaction</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Books/>
        </article>
    )
}

export default Hero