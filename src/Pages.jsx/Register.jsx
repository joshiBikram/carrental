import React from 'react'

function Register() {
  return (
    <>
    <section  className='reg  my-4'>
        <div className='d-flex justify-content-center top'>
          <i class="bi bi-person-fill-lock"></i><h3 className=''>Sign Up</h3>
          </div>
        <form className='mx-3 py-3' action="">
            <input className='px-4 my-3 w-100' type="text" placeholder='Username or Email'/>
            <input className='px-4 my-3 w-100 ' type="password" placeholder='Password'/>
            <input className='px-4 my-3 w-100' type="password" placeholder='Retype Password'/> <br />
            <input className='my-3 check' type="checkbox" id="check" /><span>Keep me signed in</span> <br />
            <button className='px-5 py-1 btn1'>Sign In</button>
        </form>
        
        
    </section>
    </>
  )
}

export default Register