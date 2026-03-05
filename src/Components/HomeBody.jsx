import { useEffect } from "react"
import Header from "./Header";
import HomeContent from "./HomeContent"

export default function HomeBody(){

    useEffect(() => {
        document.title = 'Hiro Bakery - Noveleta Cavite';
        document.body.classList.add("body-home-color");
    }, [])

    return (
        <>
            <Header />
            <HomeContent />
        </>
    )
}