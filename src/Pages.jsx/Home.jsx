import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import meter from '../Img/meter.svg'
import car from '../Img/caricon.svg'
import gear from '../Img/gear.svg'
import map from '../Img/map.svg'
import cat1 from '../Img/category-1.png'
import typ1 from '../Img/type1.jpg'
import abt from '../Img/aboutus.jpg'
import lst from '../Img/last.jpg'
import './home.css'
import { car1, Company } from './Data';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
      <section className='banner'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {car1.slice(10, 13).map((a) => (
            <SwiperSlide key={a.id} className=''>
              <img className=' a-img' src={a.img} alt="ban-img" />
              <div className="box ">
                <div className='span1'>
                  <p className='fw-bold  text-light '>FIND A CAR OF YOUR DREAM</p>
                  <h1 className='fw-bold text-light'>Discover and Buy car

                    <span className='text-danger span-b'> that is right for </span> you!
                  </h1>
                  <div className='text-center'>
                    <Link to={`details/${a.id}`} ><button className=' btn1 p-2 my-3 text-light border border-0'>Learn More</button></Link>
                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </section>

      <section className='discover mx-4 py-5'>
        <div className=' text-center pb-5 '>
          <h2 className=' position-relative'>Discover Our Featured Models
            <div className='d-flex und position-absolute'>
              <span className='und1'></span>
              <span className='und2'></span>
              <span className='und3'></span>
            </div>
          </h2>
          <p className='text-secondary p-dis py-3'>A masterful combination of style, power, sporty handling and comfort. A masterful combination of <br /> style, power, sporty handling and comfort.</p>
        </div>
        <div className='d-lg-flex gap-3'>
          {car1.slice(4, 7).map((a) => (
            <div key={a.id} className='text-center box1 cc px-3'>

              <Link to={`details/${a.id}`}><h2 className=' text-center fs-4'>{a.title}</h2></Link>
              <h3 className='fw-bold text-center fs-5'>YOU'RE NOT LIKE EVERYONE ELSE</h3>
              <p className='text-center text-secondary p-dis'>{a.des}</p>
              <h5 className='text-danger'>{a.Price}</h5>
              <div className='parent1'>
                <div className='child1'>
                  <Link to={`details/${a.id}`}><img src={a.img} alt="car-picture" /></Link>
                </div>
              </div>
              <div className='d-flex justify-content-between my-1'>
                <div className='d-flex w1 gap-2'>
                  <div className='over '>
                    <img className=' icon' src={meter} alt="" />
                  </div>
                  <div className='a1'>
                    <p className='m-0'>22,000Km</p>
                  </div>
                </div>
                <div className='d-flex w1 gap-2'>
                  <img className=' icon' src={car} alt="" />
                  <p className='a1 m-0'>2012 model</p>
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='d-flex w1 gap-2'>
                  <img className=' icon' src={map} alt="" />
                  <p className='a1 m-0'>New York</p>
                </div>
                <div className='d-flex w1 gap-2'>
                  <img className=' icon' src={gear} alt="" />
                  <p className='a1 m-0'>automatic</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='category container py-5 '>
        <div className='d-flex justify-content-between align-items-center my-4'>
          <div><h2 className='fw-bold'>Browse by <span className='text-danger'> Category</span></h2></div>
          {/* <div className='d-flex align-items-center gap-2'><a className='link-underline-dark'>Show all Categories</a> <h3>Browse by <span className='text-danger'>Type</span></h3></div>
        <div><a className='link-underline-dark'>Show all Types</a></div> */}
        </div>

        <div className=''>
          <div className='d-sm-flex justify-content-around '>
            {Company.slice(0, 3).map((a) => (
              <div className='shadow mb-5' key={a.id}>
                <img className='d-flex justify-content-center mx-auto' width="150px" src={a.img} alt={a.catname} />
                <p> <Link to={`/cat/${a.catname}`} className=' mx-auto d-flex justify-content-center'>{a.catname}</Link></p>
              </div>
            ))}

          </div>

          <div className='d-sm-flex justify-content-around '>
            {Company.slice(3, 6).map((a) => (
              <div className='shadow' key={a.id}>
                <img width="150px" className='d-flex justify-content-center mx-auto' src={a.img} alt="img-bmw" />
                <p> <Link to={`/cat/${a.catname}`} className=' mx-auto d-flex justify-content-center'>{a.catname}</Link></p>
              </div>
            ))}

          </div>

        </div>
        {/* <div width='40%' className='type'>
        <div className='d-flex '>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Convertible</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Pickup</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">SUV</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Sports car</a></p>
          </div>
        </div>
        <div className='d-flex '>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Convertible</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Pickup</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">SUV</a></p>
          </div>
          <div>
            <img className='w-100' src={typ1} alt="" />
           <p> <a className='text-dark px-3' href="">Sports car</a></p>
          </div>
        </div>
        </div> */}



      </section>

      <section className='aboutus d-lg-flex justify-content-between gap-5 px-5 container py-5'>

        <div className='mb-5 position-relative abt-rel me-5'>
          <img className='position-absolute abt-abs ' src={abt} alt="" />
        </div>
        <div className='about'>
          <h5 className='text-danger fw-bold '>ABOUT THE Rims</h5>
          <h3 className='fw-bold'>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD OF AUTOMOTIVE</h3>
          <h3 className='fw-bold position-relative'>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD OF AUTOMOTIVE</h3>
          <p className='py-4 '>
            On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Ut enim ad minim veniam.</li>
            <li>Duis aute irure dolor in reprehenderit.</li>
            <li>Excepteur sint occaecat cupidatat non proident.</li>
          </ul>
        </div>

      </section>

      <section className='featured py-5'>
        <h2 className=' text-center position-relative'>Featured Brands
          <div className='d-flex und position-absolute'>
            <span className='und1'></span>
            <span className='und2'></span>
            <span className='und3'></span>
          </div>
        </h2>
        <p className='py-4 p-dis'>A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
        <div className='d-lg-flex justify-content-around my-5 py-4'>
          {car1.slice(7, 10).map((a) => (
            <div key={a.id} className='box2'>
              <Link to={`details/${a.id}`}><h4 className='fw-bold text-center '>{a.title}</h4></Link>
              <button className='text-light abc'>2020</button>

              <Link to={`details/${a.id}`}> <img className='my-4' src={a.img} alt="car-featured" /></Link>
              <button className='d-block mx-auto px-4 py-2 effect text-white'>Booking Now</button>
              <div className='description d-flex justify-content-between py-3'>
                <ul className='light'>
                  <li>Engine Layout</li>
                  <li>Displacement</li>
                  <li>Acceleration</li>
                  <li>Max Speed</li>
                  <li>Max Power</li>
                  <li>Traction</li>
                </ul>
                <ul className='dark'>
                  <li>{a.Engine_Layout}</li>
                  <li>{a.Displacement}</li>
                  <li>{a.Acc}</li>
                  <li>270km/hr</li>
                  <li>{a.M_Power}</li>
                  <li>RWD</li>
                </ul>
              </div>
            </div>
          ))}

        </div>

      </section>

      <section className='theme '>
        <div className='container box3'>
          <p>OUR MAIN GOAL</p>
          <h2>The Best Theme for <span>Car Listing</span></h2>
        </div>
      </section>

      <section className='news'>
        <div className=' text-center pb-5 '>
          <h3 className='fw-bold text-center position-relative'>News and Technology
            <div className='d-flex und position-absolute'>
              <span className='und1'></span>
              <span className='und2'></span>
              <span className='und3'></span>
            </div>
          </h3>
          <p className='text-center w-50 m-auto text-secondary py-4 p-dis'>A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.
          </p>
        </div>
        <div className="container">
          <div className="d-sm-flex justify-content-between">
            <div>
              <div width='55%' height='400px' className='image-container '>
                <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/news/news-3.jpg" alt="news-img" />

                <h4 className='fw-bold h-news text-white  bottom-0' >The love of power is the demon of men and women</h4>

                <p className='p-news text-white '> A masterful combination of style, power, sporty handling and comfort.</p>
              </div>
              <div className="d-sm-flex justify-content-between py-4">
                <div width='45%' className='image-container '>
                  <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/news/news-1.jpg" alt="news-img" />

                  <h4 className='fw-bold h-news text-white  bottom-0' >Life is hard, and a lot of people come home tired from work</h4>

                  <p className='p-news text-white '> A masterful combination of style, power, sp..</p>
                </div>
                <div width='45%' className='image-container '>
                  <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/news/news-2.jpg" alt="news-img" />

                  <h4 className='fw-bold h-news text-white  bottom-0' >The PC has improved the world in just about every area</h4>

                  <p className='p-news text-white '>A masterful combination of style, power, sp..</p>
                </div>
              </div>
            </div>
            <div width='40%' height='800px' className='image-container dis-n'>
              <img src="https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/news/news-4.jpg" alt="news-img" />

              <h4 className='fw-bold h-news text-white ' >The love of power is the demon of men ..</h4>

              <p className='p-news text-white '> A masterful combination of style, power, sp..</p>
            </div>
          </div>
        </div>

      </section>

      <section className="last">
        <div className="d-sm-flex">
          <div className='box4 '>
            <div className="des">
              <h3 className='fw-bold '>500+</h3>
              <h4>Happy Clients</h4>
            </div>
          </div>
          <img className='' src={lst} alt="img-client" />
          <div className='box4'>
            <div className="des">
              <h3 className='fw-bold '>1000+</h3>
              <h4>EQUIPMENTS</h4>
            </div>
          </div>
          <img src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/about/aboutus-3.jpg' alt="img-equiment" />
          <div className='box4'>
            <div className="des">
              <h3 className='fw-bold '>100+</h3>
              <h4>EXPERT TRAINERS</h4>
            </div>
          </div>
          <img src={lst} alt="img-trainers" />
        </div>

        <div className="d-sm-flex">
          <img src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/about/aboutus-4.jpg' alt="img-award" />
          <div className='box4'>
            <div className="des">
              <h3 className='fw-bold '>150+</h3>
              <h4>AWARD WIN</h4>
            </div>
          </div>
          <img src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/about/aboutus-5.jpg' alt="img-trainers" />
          <div className='box4'>
            <div className="des">
              <h3 className='fw-bold '>20+</h3>
              <h4>PERSONAL TRAINERS</h4>
            </div>
          </div>
          <img src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/about/aboutus-6.jpg' alt="img-class" />
          <div className='box4'>
            <div className="des">
              <h3 className='fw-bold '>100+</h3>
              <h4>CLASS ROOM</h4>
            </div>
          </div>

        </div>


      </section>
    </>
  )
}

export default Home
