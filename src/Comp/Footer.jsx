import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>

      <footer className='bg-dark text-white'>
        <div className='container'>
          <div className=" py-5  d-lg-flex justify-content-between">
            <div className='large'>
            <Link className='text-secondary' to='/'><img src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/120x50logo.jpg' alt="" /></Link>
              <p className='a2 text-secondary'>It is a long establishment fact that a reader will be the distracted by the readable content of a page.</p>
              <div className='add'>
                <h4 className='fs-6 fw-semibold'>Address:</h4>
                <p className='a2 text-secondary'>45 Grand Central Terminal New York
                  NY 1245, United State US</p>
              </div>
              <h4 className='fs-6 fw-semibold'>Email:</h4>
              <p className='a2 text-secondary'>support@demosite.com</p>
              <h4 className='fs-6 fw-semibold'>Phone:</h4>
              <p className='a2 text-secondary'>+123 4567 890</p>

            </div>
            <div>
              <h3 className='fw-semibold fs-5 position-relative'>Quick Links <span className='ud-red position-absolute'></span></h3>
              <ol className='py-4 text-secondary'>
              <Link className='text-secondary ' to='/'><li className='a1 mid-in-hov '>Support</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Helpline</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Affilates</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Live Support</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Customer Care</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>FAQs</li></Link>
              </ol>
            </div>
            <div>
              <h3 className='fw-semibold fs-5 position-relative'>Informatioins<span className='ud-red position-absolute'></span></h3>
              <ol className='py-4 text-secondary'>
              <Link className='text-secondary' to='/about/'><li className=' a1 mid-in-hov'>About Us</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Customer service</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Privacy and Policy</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Order and Return</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Shipping Policy</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Our site map</li></Link>
              </ol>
            </div>
            <div>
              <h3 className='fw-semibold fs-5 position-relative'>Accounts<span className='ud-red position-absolute'></span></h3>
              <ol className='py-4 text-secondary'>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Balance</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Checkout</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Cards</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Track Order</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Terms</li></Link>
              <Link className='text-secondary' to='/'><li className=' a1 mid-in-hov'>Site Policy</li></Link>
              </ol>
            </div>
          </div>

        </div>
        <div className="border-bottom "></div>
        <div className="d-lg-flex justify-content-between container py-3">
          <p className='my-auto'>© Slidesigma - 2020 | All Right Reserved</p>
          <div className="d-flex gap-2   ">
            <div className='rounded-circle border border-white text-center my-auto px-2 py-1   hov-det-ic'><FaFacebookF /></div>
            <div className='rounded-circle border border-white text-center my-auto px-2 py-1 hov-det-ic'><FaTwitter /></div>
            <div className='rounded-circle border border-white text-center my-auto px-2 py-1  hov-det-ic'><FaPinterestP /></div>
            <div className='rounded-circle border border-white text-center my-auto px-2 py-1  hov-det-ic'><FaInstagram /></div>
          </div>
          <div className="d-flex gap-2   ">
            <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/card-1.png" alt="card" />
            <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/card-2.jpg" alt="card" />
            <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/card-3.jpg" alt="card" />
            <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/card-4.png" alt="card" />
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer