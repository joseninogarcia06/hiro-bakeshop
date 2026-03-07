import { useState } from "react"
import DefaultMenu from "./DefaultMenu";

let topNavigation = [
    {
        url: "/",
        label: "Home"
    },
    {
        url: "",
        label: "Our Story"
    },
    {
        url: "",
        label: "Products"
    },
    {
        url: "",
        label: "Careers"
    },
    {
        url: "",
        label: "Contact"
    }
]

export default function Header(){

    const [isToggleOn, setIsToggleOn] = useState(false);

    return (
        <>
            <nav>
                <div className="nav-label">
                    <div className="logoInternal"></div>
                </div>
                <div className="btn-dd">
                    <a onClick={() => setIsToggleOn(!isToggleOn)} className="app-dropdown-btn"></a>
                </div>
                <div className="nav-right-menu">
                    <ul>
                    {
                        topNavigation.map((item) => { return (<DefaultMenu url={item.url} label={item.label}/>) })
                    }
                    </ul>
                </div>
            </nav>
            <div className={isToggleOn ? "mobile-nav" : "hide-menu"}>
                <ul>
                    {
                        topNavigation.map((item) => (<DefaultMenu url={item.url} label={item.label} />))
                    }
                </ul>
            </div>
        </>
    )
}