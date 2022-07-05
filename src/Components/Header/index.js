import React from "react";
import './styles.css';

function Header() {

    return(
        <header>
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.5 70.5833C56.2192 70.5833 70.5834 56.2191 70.5834 38.5C70.5834 20.7809 56.2192 6.41666 38.5 6.41666C20.7809 6.41666 6.41669 20.7809 6.41669 38.5C6.41669 56.2191 20.7809 70.5833 38.5 70.5833Z" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.9113 25.6667L64.3271 57.5575" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.0887 25.6667H67.9204" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.6775 38.5L42.0933 6.60916" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.0887 51.3333L12.6729 19.4425" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.9113 51.3333H9.07959" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M53.3225 38.5L34.9067 70.3908" stroke="#CC4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><button href="/">Carrinho</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;