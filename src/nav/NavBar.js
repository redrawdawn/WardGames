import { Link, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("wardgames_user")
                    navigate("/login", {replace: true})
                }}>Logout</Link>
            </li>
            {/* <li className="navbar__item navbar__gamelist">
                <Link className="navbar__link" to="gamelist">games</Link>
            </li> */}
        </ul>
    )
}

