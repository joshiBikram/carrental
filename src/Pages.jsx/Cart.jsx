import React, { useContext } from 'react'
import CartContext from './CartContext'
import { Link } from 'react-router-dom';


function Cart() {
    let { state, dispatch } = useContext(CartContext)

    const subtotal = state.cartItems.reduce((acc, item) => acc + item.Price , 0);

    // const clearCart = (cartItems) => {
    //     cartItems = [];
    //     forceRender((prev) => !prev); // Reset cart items to an empty array
    //   };

    return (

        <>
        {state.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
            <div className="container py-5">
            <h2 className='text-center'>Cart List ({state.cartItems.length})</h2>
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body ">
                            {state.cartItems.map((b)=>(
                                <div key={b.id} className="row py-4 my-3 border">
                                    <div className="col-xs-2"><img className="w-100" src={b.img} />
                                    </div>
                                    <div className="col-xs-4 py-3">
                                        <h4 className="product-name"><strong>{b.title}</strong></h4><h4><small>{b.des}</small></h4>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="col-xs-6 text-right">
                                            <h6> <strong className=''>Price: ${b.Price}</strong></h6>
                                            <h6 className='fw-semibold'>Brand: {b.Comapany}</h6>
                                        </div>
                                        <div className="col-xs-2">
                                            <button type="button" className="btn btn-link btn-xs">
                                                <span className="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                        <button onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: b.id})} className='btn1 p-3'>Remove From Cart</button>
                                    </div>
                                    {/* <button onClick={clearCart} className='btn1 p-3'>Clear Cart</button> */}
                                </div>
                                
                            ))}
                                
                                
                            </div>
                            <div className="panel-footer">
                            
                                <div className="row text-center">
                                    <div className="col-xs-9">
                                        <h4 className="text-right">Total <strong>${subtotal}</strong></h4>
                                    </div>
                                    <div className="col-xs-3">
                                        <Link to='/' type="button" className="btn btn-success btn-block">
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
    )}
        </>
    
    )
}

export default Cart