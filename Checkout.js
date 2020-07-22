import React from 'react';
import {
    useStateValue
} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
//import Subtotal from './Subtotal';

function Checkout() {

    const [{
        basket
    }] = useStateValue();


    return <div className = "checkout" >
        <
        div className = "checkout__left" >
        <
        img className = "checkout__ad"
    src = "https://cdn.pixabay.com/photo/2018/01/31/19/19/lens-3121779__340.jpg"
    alt = "" / >

        {
            basket.length === 0 ? ( <
                div >
                <
                h2 > Your Shopping Basket is Empty < /h2> 

                <
                p >
                You Have No Items In Your Basket.To Buy One Or More Items, Click "Add To Basket"
                Next To The Item. <
                /p>

                <
                /
                div >
            ) : ( <
                div >
                <
                h2 className = "checkout__title" > Your Shopping Basket < /h2>

                {
                    /** List out all of the checkout Products */
                } {
                    basket.map(item => ( <
                        CheckoutProduct id = {
                            item.id
                        }
                        title = {
                            item.title
                        }
                        image = {
                            item.image
                        }
                        price = {
                            item.price
                        }
                        />
                    ))
                } <
                /
                div >
            )
        } <
        /div>

    {
        basket.length > 0 && ( <
            div className = "checkout__right" >

            {
                /*< Subtotal / >*/
            } <
            /div>                              
        )
    }

    <
    /div>

}

export default Checkout;