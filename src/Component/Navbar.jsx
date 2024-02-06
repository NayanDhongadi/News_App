import React from 'react'
import "./style.css/Navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <p className='logoName'>News<span>App</span></p>
     
        
        <ul >
          <li><Link className='link nav-item' to='/'>Home</Link></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </a>
            <ul className="dropdown-menu text-center">
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
        </ul>
        
      </nav>
    </>
  )
}




