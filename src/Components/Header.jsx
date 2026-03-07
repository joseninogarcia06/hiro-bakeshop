import { useState } from "react"
import { useLocation } from "react-router-dom";
import DefaultMenu from "./DefaultMenu";

let topNavigation = [
    {
        url: "/",
        label: "Home"
    },
    {
        url: "/our-story",
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
    const location = useLocation();

    console.log(location.pathname);

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
                        topNavigation.map((item) => { return (<DefaultMenu isActive={location.pathname === item.url} url={item.url} label={item.label}/>) })
                    }
                    </ul>
                </div>
            </nav>
            <div className={isToggleOn ? "mobile-nav" : "hide-menu"}>
                <ul>
                    {
                        topNavigation.map((item) => (<DefaultMenu isActive={false} url={item.url} label={item.label} />))
                    }
                </ul>
            </div>
        </>
    )
}