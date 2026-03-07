import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

export default function Products(){

    useEffect(() => {
        document.title = "Our Products - Hiro Bakeshop";
    }, [])

    return (
        <>
            <Header />
            <div className="products-container">
                <h2>Our Products</h2>
            </div>
            <Footer />
        </>
    )
}