import React from 'react'
import './SingleProduct.css'

function SingleProduct({ product }) {

    console.log('Type of product.images:', typeof product.images);
    console.log('Value of product.images:', product.images);

    return (
        <div className='SingleProduct'>
            <div className="productCard">
                <div className="imageContainer">

                    {/* <img className='productImg' src={product.images && product.images.length > 0 ? JSON.parse(product.images)[0] : ''} alt={product.title} /> */}

                    <img className='productImg' src={product.images[0]} alt={product.title} />



                </div>
                <div className="productDetails">
                    <h2 className='productTitle limited-text'>{product.title}</h2>
                    <p className='productDesc limited-text'>{product.description}</p>
                    <p className='productPrice'>Rs. {product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct