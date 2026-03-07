import { useEffect } from "react"
import Header from "./Header";
import HomeContent from "./HomeContent"
import Footer from "./Footer"

export default function HomeBody(){

    useEffect(() => {
        document.title = 'Hiro Bakery - Noveleta Cavite';
    }, [])

    return (
        <>
            <Header />
            <HomeContent />
            <Footer />
        </>
    )
}