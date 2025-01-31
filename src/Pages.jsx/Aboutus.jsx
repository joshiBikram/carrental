import React from 'react'
import abt from '../Img/aboutus.jpg'
import lst from '../Img/last.jpg'
import team from '../Img/team.png'

function Aboutus() {
  return (
    <>
    <section className='about'>
    <h2 className='fw-bold text-center my-5'>About Us</h2>
    <div className='aboutus d-lg-flex justify-content-between gap-5 px-5 container'>
        
          <div className='pb-3 position-relative abt-rel me-5 mb-5'>
            <img className='position-absolute abt-abs ' src={abt} alt="" />
          </div>
          <div className='about'>
            <h5 className='text-danger fw-bold '>ABOUT THE Rims</h5>
            <h3 className='fw-bold'>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD OF AUTOMOTIVE</h3>
            <h3 className='fw-bold'>WE ARE THE BEST CAR SERVICE PROVIDE IN THE WORLD OF AUTOMOTIVE</h3>
            <p className='py-4'>
            On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty.</p>
            <ul>
              <li className='my-auto'>Lorem ipsum dolor sit amet.</li>
              <li>Ut enim ad minim veniam.</li>
              <li>Duis aute irure dolor in reprehenderit.</li>
              <li>Excepteur sint occaecat cupidatat non proident.</li>
            </ul>
          </div>
          
      </div>

      <div className="last my-5">
        <div className="d-flex">
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>500+</h3>
            <h4>Happy Clients</h4>
          </div>
        </div>
        <img src={lst} alt="" />
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>1000+</h3>
            <h4>EQUIPMENTS</h4>
          </div>
        </div>
        <img src={lst} alt="" />
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>100+</h3>
            <h4>EXPERT TRAINERS</h4>
          </div>
        </div>
        <img src={lst} alt="" />
        </div>

        <div className="d-flex">
        <img src={lst} alt="" />
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>150+</h3>
            <h4>AWARD WIN</h4>
          </div>
        </div>
        <img src={lst} alt="" />
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>20+</h3>
            <h4>PERSONAL TRAINERS</h4>
          </div>
        </div>
        <img src={lst} alt="" />
        <div className='box4'>
          <div className="des">
            <h3 className='fw-bold '>100+</h3>
            <h4>CLASS ROOM</h4>
          </div>
        </div>

        </div>
        

      </div>

      <div className='work my-5 container'>
        <h3 className='text-center fw-bold'>How It Works</h3>
        <p className=''>A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
        <div className='my-4 d-lg-flex justify-content-between'>
            <div>
            <i class="bi bi-geo-alt icon"></i>
            <h3 className='text-center'>FIND INTERESTING PLACE</h3>
            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her</p>
            </div>
            <div>
            <i class="bi bi-file-earmark-richtext icon"></i>
            <h3 className='text-center'>PICK A CATEGORY</h3>
            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her</p>
            </div>
            <div>
            <i class="bi bi-car-front icon"></i>
            <h3 className='text-center'>TRY TO TEST DRIVE</h3>
            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her</p>
            </div>

        </div>
      </div>

      <div className="team my-5 container">
        <h3 className='fw-bold text-center'>Our Team</h3>
        <p className='mx-auto text-center'>A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
        <div className='d-lg-flex justify-content-between gap-3 my-5'>
          <div className='team1 my-3'>
            <h3 className='text-center'>John Marshall</h3>
            <h5 className='text-center'>Team Head</h5>
            <p className='text-center mx-auto'>A masterful combination of style, power, sporty handling and comfort.</p>
            <img className='w-100 ' src={team} alt="" />
          </div>
          <div className='team1 my-3'>
            <h3 className='text-center'>Steve Roberts</h3>
            <h5 className='text-center '>Tehnician</h5>
            <p className='text-center mx-auto'>A masterful combination of style, power, sporty handling and comfort.</p>
            <img src={team} alt="" />
          </div>
          <div className='team1 my-3'>
            <h3 className='text-center'>Michael Cartney</h3>
            <h5 className='text-center'>Sales Manager</h5>
            <p className='text-center mx-auto'>A masterful combination of style, power, sporty handling and comfort.</p>
            <img src={team} alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Aboutus