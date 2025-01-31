import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages.jsx/Home'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import img1 from '../Img/logo.png'
import Contact from '../Pages.jsx/Contact'
import Aboutus from '../Pages.jsx/Aboutus'
import Register from '../Pages.jsx/Register'
import Category from '../Pages.jsx/Category'
import Details from '../Pages.jsx/Details'
import catData from '../Pages.jsx/CatData'
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { GrTarget } from "react-icons/gr";
import { LuRefreshCcw } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Cart from '../Pages.jsx/Cart'
import CartContext from '../Pages.jsx/CartContext';
import { Company } from '../Pages.jsx/Data';


function Header() {
  let {state, dispatch}=useContext(CartContext)

  return (
    <>


      <section className='top border-bottom'>
        <div className=" container-sm container-fluid d-flex justify-content-between top  text-secondary">
          <ul className='d-sm-flex'>
            <li className='border-start border-end px-sm-3 py-2 d-flex gap-1 mid-in-hov top-1'><span ><IoCall className='my-auto' /></span>+1122672</li>
            <li className='border-end px-3 py-2  d-flex gap-1 d-none d-sm-inline-flex mid-in-hov'><span ><IoLocationSharp className='my-auto' /></span>Sell your car</li>
            <li className='ps-3 py-2 d-flex gap-1 d-none d-sm-inline-flex mid-in-hov'><span ><GrTarget className='my-auto' /></span>Car Around Me</li>
          </ul>
          <ul className='d-flex my-auto'>
            <li className=' border-end px-3 py-2 top-1'><Link className='d-flex gap-1 text-secondary mid-in-hov' to="/register/"><img className='rounded-circle img-top' height='20px' width='20px' src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/user.png" alt="user" /> Sign in</Link></li>
            <li className=' border-end px-3 py-2 d-none d-sm-inline-flex '><Link className='d-flex gap-1 text-secondary mid-in-hov' to="/"><img className='rounded-circle img-top' height='20px' width='20px' src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/usa.png" alt="user" /> USD</Link></li>
            <li className='border-end px-3 py-2 d-none d-sm-inline-flex'><Link className='text-secondary mid-in-hov'  to="/"> Help</Link></li>
          </ul>
        </div>
      </section>


      <section className='middle py-3'>
        <div className="container d-flex justify-content-between align-items-center ">
          <Link to="/"><img src={img1} alt="logo" /></Link>
          <div className='border border-0 d-flex  d-none d-sm-inline-flex '>
            
              <input className=' p-2 border  border-end bg-white rounded-start-pill  mid-inp' type="text" placeholder="Search keyword, category, brand of part" />
            
            
              <div className="dropdown my-auto bg-white border-top border-bottom p-2">
                <button className="btn  dropdown-toggle p-2 px-4 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Category
                </button>
                <ul className="dropdown-menu my-1 border border-0 ">

                  {Company.map((a) => (
                    <li key={a.id} className='p-2 border-bottom hov-cat'><Link to={`/cat/${a.catname}`}>{a.catname}</Link></li>

                  ))}
                </ul>
              </div>
            

        
              <button className='boder border-0 p-2 hov-btn-mdl px-5 btn1' type="submit">Search</button>
            
          </div>
          <ul className='d-flex fs-4 gap-3 text-secondary'>
            <li className='mid-in-hov'><LuRefreshCcw /></li>
            <li className='mid-in-hov'><FaRegHeart /></li>
            <li className=''><Link to='/cart' className='text-secondary mid-in-hov'><IoCartOutline />({state.cartItems.length})</Link></li>
          </ul>
        </div>

      </section>

      <Navbar className='p-0 Navbar' expand="lg"  bg="dark-subtle" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand className='text-white me-0 bg-nav navbrand' href="/">
                    <div className="dropdown my-auto ">
                <button className="btn aaaa dropdown-toggle py-3 px-4 d-flex gap-3 my-auto text-uppercase fw-semibold " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className=''><IoMenu /></span> All Category
                </button>
                <ul className="dropdown-menu  my-1 border border-0 bg-white z-22">

                  {Company.map((a) => (
                    <li key={a.id} className='nav-cat  border-bottom hov-cat'><Link to={`/cat/${a.catname}`}>{a.catname}</Link></li>

                  ))}
                </ul>
              </div>
              
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav a">
                        <Nav className='mx-auto gap-3 fw-semibold ' >
                            
                            <Nav.Link className='text-white mid-in-hov' href="/">Home</Nav.Link>
                            <Nav.Link className='text-white mid-in-hov' href="/">Media</Nav.Link>
                            <Nav.Link className='text-white mid-in-hov' href="/">
                            <div className="dropdown ">
                              <button className="btn  dropdown-toggle fw-semibold p-0 m-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Page
                              </button>
                               <ul className="dropdown-menu my-1 border border-0 bg-white">
                               <li><Link className="dropdown-item" to='/about/'>About Us</Link></li>
                               <li><Link className="dropdown-item" to='/register/'>Register</Link></li>
                 
                               </ul>
                            </div>
                            </Nav.Link>
                            <Nav.Link className='text-white mid-in-hov' href="/">Blogs</Nav.Link>
                            <Nav.Link className='text-white mid-in-hov' href="/">Pricing</Nav.Link>
                            <Nav.Link className='text-white mid-in-hov' href="/contact/">Contact</Nav.Link>

                        </Nav>

                        <Nav className="me-2 text-white mid-in-hov d-none d-md-inline-flex ">
                        Sell Your Car Here $
                        </Nav>

                    </Navbar.Collapse>



                </Container>
            </Navbar>





      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact/' element={<Contact />} />
        <Route path='/about/' element={<Aboutus />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/cat/:cid/' element={<Category />} />
        <Route path='/details/:id/' element={<Details />} />
        <Route path='/cart/' element={<Cart/>}/>
        <Route path="/cat/:cid/" element={<Category/>}/>
      </Routes>

    </>
  )
}

export default Header

// {/* <nav className='bg-dark py-2'>
//         <ul className='d-flex justify-content-around align-items-center my-3 text-light'>
//           <li>
        
//           <li><a className="dropdown-item" href="#">Luxury Car</a></li>
//           <li><a className="dropdown-item" href="#">Sport Car</a></li>
//           <li><a className="dropdown-item" href="#">Economy Car</a></li>
       
// //   <li><a className="dropdown-item" href="#">Sport Car</a></li>
// //   <li><a className="dropdown-item" href="#">Economy Car</a></li>
// // </ul>
// //       </div>

// //     </li>
// //     <li>
// //       <div>
// //         <ul className='d-flex align-items-center'>
// //           <li>
// //             <Link className=' text-light' to='/'>Home</Link>
// //           </li>
// //           <li>
// //             <a href>Media</a>
// //           </li>
// //           <li>
// //             <div className="dropdown">
// //               <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// //                 Page
// //               </button>
// //               <ul className="dropdown-menu">
              //  <li><Link className="dropdown-item" to='/about/'>About Us</Link></li>
              //    <li><Link className="dropdown-item" to='/register/'>Register</Link></li>
// //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
// //               </ul>
// //             </div>
// //           </li>
// //           <li>
// //             <a href>Blogs</a>
// //           </li>
// //           <li>
// //             <a href>Pricing</a>
// //           </li>
// //           <li>
// //             <Link className='text-light' to='/contact/'>Contact</Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </li>
// //     <li>Sell Your Car Here$</li>
// //   </ul>
// // </nav> 