import React from 'react'
import con1 from '../Img/contact-1.jpg'

function Contact() {
  return (
    <>
    <h2 className='fw-bold text-center my-5'>Contact Us</h2>
    <div className="container d-sm-flex justify-content-between py-5">
       <div className='p-3'>
         <h3>Contact Us and Get a Free Consultation</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <form action="">
        <input className='py-2 px-3 w-100 border' type="text" placeholder='Your Name' /><br />
        <input className='py-2 px-3 w-100 border my-3' type="text" placeholder='Subject' /><br />
        <input className='py-2 px-3 w-100 border mb-3' type="email" placeholder='Email Id' /><br />
        <textarea className='py-2 px-3 w-100 border mb-5' name="mss" id="mss" cols="30" rows="5" placeholder='Your Message'></textarea><br />

        <button className='btn1 px-3 py-2'>Submit</button>
        </form>
        </div>

        <img className=' w-100' src={con1} alt="contact-img" />
        
    </div>
    <div className=''>
    <iframe className='map w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.029932730954!2d85.3422330742532!3d27.685469726458326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1712038411680!5m2!1sen!2snp" width="600" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    
    </>
  )
}

export default Contact