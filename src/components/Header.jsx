import React from 'react'
import {Link, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Service from '../pages/Service';
import Home from './Home';

export default function Header() {
    return (
        
        <div>
            <header id="header" className="header d-flex align-items-center" >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <h1>UpConstruction<span>.</span></h1>
                    </Link>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li className="dropdown"><Link to="/"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <li><Link to="/">Dropdown 1</Link></li>
                                    <li className="dropdown"><Link to="/"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                        <ul>
                                            <li><Link to="/">Deep Dropdown 1</Link></li>
                                            <li><Link to="/">Deep Dropdown 2</Link></li>
                                            <li><Link to="/">Deep Dropdown 3</Link></li>
                                            <li><Link to="/">Deep Dropdown 4</Link></li>
                                            <li><Link to="/">Deep Dropdown 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">Dropdown 2</Link></li>
                                    <li><Link to="/">Dropdown 3</Link></li>
                                    <li><Link to="/">Dropdown 4</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
        
    )
}
