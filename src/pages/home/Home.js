import React from 'react'
import './Home.css'
import ProductFilter from '../../components/productFilter/ProductFilter'
import ProductList from '../ProductList'

function Home() {
    return (
        <div className='Home'>
            <ProductFilter />
            <ProductList />
        </div>
    )
}

export default Home