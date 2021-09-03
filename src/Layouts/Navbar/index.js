import React from 'react'
import './Navbar.css';
export default function Navbar() {
    return (
        <div className="navbar">
            <p className="navbar-title">Github Finder</p>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
            </ul>
        </div>
    )
}
