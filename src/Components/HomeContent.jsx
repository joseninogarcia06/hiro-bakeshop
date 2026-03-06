import cookieImage from "../assets/cookie3_1.png";
import cookieImage4 from "../assets/cookie4.jpg";

export default function HomeContent(){
    return (
        <>
            <section className="cookie-b">
                <div className="cookie-p-1">
                    <h1>Freshly Baked, Always Loved</h1>
                    <p>Fresh from our oven, made with love for every bite.</p>
                    <button className="order-now-btn">Order Now →</button>
                </div>
            </section>
            <section className="short-message">
                <p>Hiro Bakery is dedicated to bringing you the freshest cookie, pastries, and sweet treats every day. Our baked goods are made with the finest ingredients and a whole lot of love, ensuring that every bite brings joy and comfort.</p>
            </section>
            <section className="default-section-1">
                <div className="default-section-container">
                    <div className="default-section-left">
                        <h1>Freshly Baked Happiness</h1>
                        <p>At Hiro Bakery, every bite is made with love. From warm breads to delightful pastries, we bake fresh every day to bring you the perfect taste of comfort and sweetness.</p>
                    </div>
                    <div className="default-section-right">
                        <img src={cookieImage} className="img-df" />
                    </div>
                </div>
            </section>
            <div className="default-section-2">
                <div className="default-section-2-container">
                    <div className="default-section-2-left">
                        <img src={cookieImage4} className="img-df" />
                    </div>
                    <div className="default-section-2-right">
                        <h1>Taste the Warmth of Fresh Baking</h1>
                        <p>Enjoy handcrafted breads, cakes, and pastries made fresh daily. At Hiro Bakery, every bite is baked to bring joy and comfort to your day.</p>
                    </div>
                </div>
            </div>
            <section className="section-b3-a">
                <div className="container-b3-a">
                    <div className="content-b3-a">
                        <h1>Perfect for Every Occasion</h1>
                        <p>Whether you're celebrating a special moment or simply craving something sweet, Hiro Bakery has something for you. Our selection of freshly baked goods is perfect for breakfast, snacks, or sharing with family and friends.</p>
                        <p>We use carefully selected ingredients to ensure that every product meets our high standards of quality and taste. At Hiro Bakery, we are committed to delivering baked goods that are not only delicious but also made with genuine care.</p>
                        <p>Each product at Hiro Bakery is made with passion and dedication. From soft loaves of bread to delicious pastries and delightful desserts, our bakers follow traditional techniques to create treats that everyone can enjoy.</p>
                        <div className="btn-container">
                            <button className="order-now-btn">Order Now →</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}