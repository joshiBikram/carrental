import React, { useContext } from 'react'
import { car1 } from './Data'
import { useParams } from 'react-router-dom'
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


function Details() {
    let { state, dispatch } = useContext(CartContext)

    let { id } = useParams()
    var info = car1.find((a) => a.id == id)
    return (
        <>
            <div className="container py-3">
                <h3 className='position-relative'>Details</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <img className='w-100' src={info.img} alt="" />
                    </div>
                    <div className="col-lg-9">
                        <h4>{info.title}</h4>
                        <p>Price: ${info.Price}</p>
                        <p>{info.des}</p>
                        <button onClick={() => dispatch({ type: 'addtocart', payload: info })}>Add to Cart</button>
                    </div>
                </div>
                <div className="row py-4 g-4">
                    <div className='col-lg-8 '>
                        <h4 className='fw-bold fs-2 py-2'>{info.title}</h4>
                        <p className='text-secondary'>{info.des} {info.des}</p>
                        
                        <div className='scroll-container'>
                        <ul className="nav nav-tabs  border border-0 scroll-content" id="myTab" role="tablist">
                            <li className="nav-item  " role="presentation">
                                <button className="nav-link active px-sm-4  py-3 bg-secondary det-tab-font text-black " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">VECHILE OVERVIEW</button>
                            </li>
                            <li className="nav-item  " role="presentation">
                                <button className="nav-link px-sm-4 py-3 bg-secondary det-tab-font text-black" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">TECHNICAL SPECIFICATION</button>
                            </li>
                            <li className="nav-item " role="presentation">
                                <button className="nav-link px-sm-4 py-3 bg-secondary det-tab-font text-black" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">ACCESSORIES</button>
                            </li>
                            <li className="nav-item  " role="presentation">
                                <button className="nav-link py-3 px-sm-4 bg-secondary det-tab-font text-black" id="performance-tab" data-bs-toggle="tab" data-bs-target="#performance" type="button" role="tab" aria-controls="performance" aria-selected="false">PERFORMANCE</button>
                            </li>
                            
                        </ul>
                        </div>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active border-start border-end shadow p-3" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h2 >What is Lorem Ipsum?</h2>
                                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <h2 >What is Lorem Ipsum?</h2>
                                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            </div>
                            <div class="tab-pane fade border-start border-end shadow p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className=''>BASIC INFO </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Model Year</td>
                                            <td>2010</td>
                                        </tr>
                                        <tr>
                                            <td>No. of Owners</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>KMs Driven</td>
                                            <td>30,000</td>
                                        </tr>
                                        <tr>
                                            <td>Fuel Type</td>
                                            <td>Diesel</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className='table table-bordered my-5'>
                                    <thead>
                                        <tr>
                                            <th colSpan={2} >Technical Specification </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Engine Type</td>
                                            <td>TDCI Diesel Engine</td>
                                        </tr>
                                        <tr>
                                            <td>Engine Description</td>
                                            <td>1.5KW</td>
                                        </tr>
                                        <tr>
                                            <td>No. of Cylinders</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>Mileage-City</td>
                                            <td>22.4kmpl</td>
                                        </tr>
                                        <tr>
                                            <td>Mileage-Highway</td>
                                            <td>25.83kmpl</td>
                                        </tr>
                                        <tr>
                                            <td>Fuel Tank Capacity</td>
                                            <td>40 (Liters)</td>
                                        </tr>
                                        <tr>
                                            <td>Seating Capacity</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Transmission Type</td>
                                            <td>Manual</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade border-start border-end shadow p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th colSpan={2} >Accessories </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Air Conditioner</td>
                                            <td ><i class="bi bi-check-lg text-danger b-icon"></i></td>
                                        </tr>
                                        <tr>
                                            <td>AntiLock Braking System</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Power Steering</td>
                                            <td></td>
                                        </tr>
                                            <tr>
                                                <td>Power Windows</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>CD Player</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Leather Seats</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Central Locking</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Power Door Locks</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Brake Assist</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Driver Airbag</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Passenger Airbag</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Crash Sensor</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Engine Check Warning</td>
                                                <td></td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade border-start border-end shadow p-3" id="performance" role="tabpanel" aria-labelledby="performance-tab">
                            <h2 >What is Lorem Ipsum?</h2>
                                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <h2 >What is Lorem Ipsum?</h2>
                                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

                                
                            </div>
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

export default Details