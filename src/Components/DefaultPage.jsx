import { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function DefaultPage({ pageTitle, content }){

    useEffect(() => {
        document.title = pageTitle
    }, [])

    return (
        <>
            <Header />
            <div className="default-page-container">
                <h2>{content.pageTitle}</h2>
                {
                    content.content.map((item) => (
                        <p>{item.subContent}</p>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}