import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/feng-shui-services/">
                        <li>Feng Shui Services</li>
                    </Link>
                    <Link to="/projects/">
                        <li>Projects</li>
                    </Link>
                    <button>Contact Us</button>
                </ul>
            </div>
        </footer>
    )
}
