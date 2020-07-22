import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return ( <
        div className = "home" >

        <
        img className = "home__image"
        src = "https://cdn.shopify.com/s/files/1/0063/6741/2260/t/12/assets/slide1.jpg?v=15595056828425899468"
        alt = "" / >

        <
        div className = "home__row" >

        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://images.offerup.com/aAIPhBAoqt-ldhWTVwBbLe9PStg=/600x800/7783/778315d802904185954929911abff7d3.jpg" / >

        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://i.ebayimg.com/images/g/spsAAOSwEDtbmE7W/s-l300.png" / >

        <
        /div>

        <
        div className = "home__row" >
        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://cbu01.alicdn.com/img/ibank/2019/544/970/10559079445_1015819762.jpg" / >


        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://i.pinimg.com/originals/12/52/2c/12522c62a8099efb8d6fe32ba70b146e.jpg" / >


        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://cdn.shopify.com/s/files/1/0067/6210/2835/products/product-image-825664985_1200x1200.jpg?v=1571961087" / >



        <
        /div>

        <
        div className = "home__row" >

        <
        Product id = "12321341"
        title = "The Lean"
        price = {
            11.96
        }
        image = "https://www.traxnyc.com/blog/wp-content/uploads/2015/07/chains44copy.jpg" / >

        <
        /div>

        <
        /div>
    )
};

export default Home;