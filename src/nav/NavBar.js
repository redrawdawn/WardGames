
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {  Collapse, Navbar, Nav, NavItem } from 'reactstrap'


export const NavBar = () => {
    const [navbarVisible, setNavbarVisible] = useState(false)
    const navigate = useNavigate()

    const toggle = () => setNavbarVisible(!navbarVisible)
    return (
        <Navbar className="xnavbar" onClick={toggle}>
            ☰
            <Collapse className="navbar" isOpen={navbarVisible} >
                <Nav>
                    <NavItem>
                        <div className="xnavbar__item xnavbar__logout">
                            <Link className="xnavbar__link" to="" onClick={() => {
                                localStorage.removeItem("wardgames_user")
                                navigate("/login", {replace: true})
                            }}>Logout</Link>
                        </div>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

