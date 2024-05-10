import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className='call2 mt-5' >Have questions? </div>
            <button type="button" className="btn btn-outline-dark mt-3">Get In Touch</button> 
        </div>

        <div className='col-sm-12 col-md-3 col-lg-3 mt-5 pt-3'>
            <div className='fw-bold fs-5'>Track Your Order</div>
            <p className='mt-3 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <div className='success'>Track Your Order</div>
        </div>

        <div className='col-sm-12 col-md-3 col-lg-3 mt-5 pt-3'>
            <div className='fw-bold fs-5'>Return & Refund</div>
            <p className='mt-3 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <div className='success'>Read More</div>
        </div>
    </div>
   </div>

    <div className='bg-dark pb-3'>
    <div className="container mt-5 ">
        <div className="row pb-5">
            <div className="col-sm-12 col-lg-3 col-md-3 mt-5">
                <div className="navbar-brand logo text-light fs-1">CK</div>
                <div className='text-light'>Pulvinar aenean dignissim porttitor sed risus urna, pretium quis non id.</div>
                <div className='text-light'>
                    <RiInstagramFill className='mx-1'/>
                    <FaFacebookSquare  className='mx-1'/>
                    <FaTwitterSquare className='mx-1'/>
                </div>
            </div>

            <div className='col-sm-12 col-lg-3 col-md-3 mt-5 text-light'>
                <h5>Information</h5>
                <div>About me</div>
                <div>My story</div>
                <div>Awards & achievement</div>
                <div>Contact</div>
            </div>

            <div className='col-sm-12 col-lg-3 col-md-3 mt-5 text-light'>
                <h5>Discover</h5>
                <div>Dresses</div>
                <div>Bottoms</div>
                <div>Footwear</div>
                <div>Accessories</div>
            </div>

            <div className='col-sm-12 col-lg-3 col-md-3 mt-5 text-light'>
                <h5>Locate Us</h5>
                <div>123 Demo Blvd, Miami, FL 4567,</div>
                <div>United States</div>
                <div>+1 123-456-7890</div>
                <div>mail@example.com</div>
            </div>
        </div>

        <hr className='text-light'/>

        <div className='text-light text-center'>© 2024 Fashion Designer. Powered by Fashion Designer</div>
    </div>

    </div>
   </>
  )
}

export default Footer
