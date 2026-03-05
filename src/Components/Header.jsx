export default function Header(){
    return (
        <>
            <nav>
                <div className="nav-label">
                    <a href="#">HIRO BAKERY</a>
                </div>
                <div className="nav-right-menu">
                    <ul>
                        <li>
                            <a className="active" href="">Home</a>
                        </li>
                        <li>
                            <a href="">Our Story</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}