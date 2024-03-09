import React from 'react'
import './ProductFilter.css'

export default function ProductFilter() {
    return (
        <div className='ProductFilter'>
            <h2 className='filterHeading'>Filter</h2>
            <div className="genderSearch box">
                <ul className='genderList'>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Boys</li>
                    <li>Girls</li>
                </ul>

            </div>
            <div className="brandSearch box">
                <p>BRAND</p>
                <ul>
                    <li>Campus <span>1996</span></li>
                    <li>ADIDAS <span>1540</span></li>
                    <li>PUMA <span>1516</span></li>
                    <li>Sparx <span>1402</span></li>
                    <li>ABROS <span>1217</span></li>
                    <li>ASIAN <span>765</span></li>
                    <li>HRX by Hirithik Roshan <span>608</span></li>
                    <li>Nike <span>601</span></li>
                </ul>

            </div>
            <div className="priceSearch box">
                <p>Price</p>
                <ul>
                    <li>Rs. 344 to Rs. 7258 <span>19522</span></li>
                    <li>Rs. 344 to Rs. 7258 <span>19522</span></li>
                    <li>Rs. 344 to Rs. 7258 <span>19522</span></li>
                    <li>Rs. 344 to Rs. 7258 <span>19522</span></li>
                </ul>

            </div>
            <div className="colorSearch box">
                <p>Color</p>
                <ul>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                    <li>
                        <div className="colorBox"></div>
                        <p>Color Name <span>5625</span></p>
                    </li>
                </ul>
                <p className="moreColor">
                    +36 more
                </p>
            </div>
            <div className="dicountRange box">
                <p>DISCOUNT RANGE</p>
                <ul>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                    <li>10% and above</li>
                </ul>
            </div>
        </div>
    )
}
