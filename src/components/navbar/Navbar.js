import React from 'react'
import './Navbar.css'
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import brandLogo from '../../assets/myntra.png'
import { CiSearch } from "react-icons/ci";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="brand">
                <img className='brnad-logo' src={brandLogo} alt="Myntra" />
            </div>
            <div className="nav-container">
                <div className="category"><h5 className='categoryText'>MEN</h5></div>
                <div className="category"><h5 className='categoryText'>WOMEN</h5></div>
                <div className="category"><h5 className='categoryText'>KIDS</h5></div>
                <div className="category"><h5 className='categoryText'>HOME & LIVING</h5></div>
                <div className="category"><h5 className='categoryText'>BEAUTY</h5></div>
                <div className="category"><h5 className='categoryText'>STUDIO <span>NEW</span></h5></div>
            </div>
            <div className="item-search">
                <div className="search-icon-box">
                    <CiSearch className='search-icon' />
                </div>
                <input className='search-input' type="text" placeholder='Search for products, brands and more' />
            </div>
            <div className="right-container">
                <div className="icon-box">
                    <CiUser className='icon' />
                    <h5 className='icon-text'>Profile</h5>
                </div>
                <div className="icon-box">
                    <CiHeart className='icon' />
                    <h5 className='icon-text'>Wishtlist</h5>
                </div>
                <div className="icon-box">
                    <BsHandbag className='icon' />
                    <h5 className='icon-text'>Bag</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar