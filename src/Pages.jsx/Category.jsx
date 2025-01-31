import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { car1 } from './Data'
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import CartContext from './CartContext';




function Category() {
    let { state, dispatch } = useContext(CartContext)
    let { cid } = useParams()
    let cdata = car1.filter((a) => a.Comapany == cid)
    return (
        <>
            <div className="container py-3">
                <h2>Category {cid}</h2>
                <div className="row">
                    <div className="col-lg-8">


                        <div className="row">
                            {cdata.map((a) => (
                                <div key={a.id} className="col-lg-6">
                                    <div className="shadow p-2">
                                        <img src={a.img} className='' width='300px' height='400px' alt="category" />
                                        <p className='fw-bold py-2'><Link to={`/details/${a.id}`}>{a.title}</Link></p>
                                        <button className='btn1 p-3' onClick={() => dispatch({ type: 'addtocart', payload: a })}>Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='border  py-2 shadow'>
                            <div className=' d-flex gap-2 border-bottom px-4 py-2'><span className='text-secondary  my-auto' ><FaRegUser className='fs-5' /></span><h3 className='my-auto fs-5 fw-semibold'>Contact Owner</h3></div>
                            <div className="d-flex gap-3  px-4 py-4">
                                <div className='border px-2 py-1 my-auto'><FaLocationDot className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>198 West 21th Street, Suite 721 NewYork, NY 10010</p>
                            </div>
                            <div className="d-flex gap-3  px-4 py-2">
                                <div className='border px-2 py-1 my-auto'><IoMdCall className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>+08 (123) 456 99</p>
                            </div>
                            <div className="d-flex gap-3  px-4 py-4">
                                <div className='border px-2 py-1 my-auto'><CgMail className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>information@domain.com</p>
                            </div>

                            <div className="d-flex px-4 py-2 text-danger ">
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaFacebookF /></div>
                                <div className='border-top border-bottom text-center my-auto py-2 w-100 hov-det-ic'><FaTwitter /></div>
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaPinterestP /></div>
                                <div className='border-top border-bottom text-center my-auto py-2 w-100 hov-det-ic'><FaInstagram /></div>
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaYoutube /></div>
                            </div>

                            <div className='px-4 py-4'>
                                <input type="email" className="form-control py-2" id="floatingInputGrid" placeholder="Your Email" />
                            </div>

                            <div className='px-4 py-2'>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Message'></textarea>
                            </div>

                            <div className='px-4 py-2'>
                                <button className='py-2 w-100 '>Send Message</button>
                            </div>



                        </div>

                        <div className='border  py-2 shadow my-4'>
                            <div className=' d-flex gap-2 border-bottom px-4 py-2'><span className='text-secondary  my-auto' ><FaRegUser className='fs-5' /></span><h3 className='my-auto fs-5 fw-semibold'>Carriage Owner</h3></div>

                            <div className="d-flex gap-2  px-4 py-3">
                                <div className='my-auto'><img className='rounded-circle' src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/cardetails/user-1a.jpg" alt="carriage-owner" /></div>
                                <div className='my-auto '><h6 className='fw-bold mid-in-hov m-0 p-0'>Mares Jean</h6>
                                    <p className='text-secondary m-0 p-0 p-reg'>Since: March, 2018</p></div>
                            </div>

                            <div className="d-flex gap-3  px-4 py-4">
                                <div className='border px-2 py-1 my-auto'><FaLocationDot className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>198 West 21th Street, Suite 721 NewYork, NY 10010</p>
                            </div>
                            <div className="d-flex gap-3  px-4 py-2">
                                <div className='border px-2 py-1 my-auto'><IoMdCall className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>+08 (123) 456 99</p>
                            </div>
                            <div className="d-flex gap-3  px-4 py-4">
                                <div className='border px-2 py-1 my-auto'><CgMail className='text-danger ' /></div>
                                <p className='my-auto text-secondary mid-in-hov p-reg'>information@domain.com</p>
                            </div>

                            <div className="d-flex px-4 py-2 text-danger ">
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaFacebookF /></div>
                                <div className='border-top border-bottom text-center my-auto py-2 w-100 hov-det-ic'><FaTwitter /></div>
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaPinterestP /></div>
                                <div className='border-top border-bottom text-center my-auto py-2 w-100 hov-det-ic'><FaInstagram /></div>
                                <div className='border text-center my-auto py-2 w-100 hov-det-ic'><FaYoutube /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category