import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css/Resp.css"
export default function RespNav() {
    return (
        <>
            <nav>
                <ul class='nav-bar'>
                    <p className='logoName'>News<span>App</span></p>
                    <input type='checkbox' id='check' />
                    <span class="menu">
                        <div className="ban">
                        <li><Link className='link' to='/'>Home</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                            </a>
                            <ul className="dropdown-menu ">
                                <Link className='cat_link' to='?category=business'><li>Business</li></Link>
                                <Link className='cat_link' to='?category=entertainment'><li>Entertainment</li></Link>
                                <Link className='cat_link' to='?category=general'><li>General</li></Link>
                                <Link className='cat_link' to='?category=health'><li>Health</li></Link>
                                <Link className='cat_link' to='?category=science'><li>Science</li></Link>
                                <Link className='cat_link' to='?category=sports'><li>Sports</li></Link>
                                <Link className='cat_link' to='?category=technology'><li>Technology</li></Link>
                            </ul>

                        </li>
                        <li><Link className='link' to='/about'>About</Link></li>
                        <li><Link className='link' to='/contact'>Contact</Link></li>
                        <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                        </div>
                    </span>
                    <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                </ul>
            </nav>

        </>
    )
}
