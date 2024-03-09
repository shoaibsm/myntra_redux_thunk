import React, { useEffect } from 'react'
import './ProductList.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slices/ProductSlice';
import SingleProduct from '../components/SingleProduct';
import { Alert, Flex, Spin } from 'antd';
import ProductFilter from '../components/productFilter/ProductFilter';
<Alert message="Error" type="error" showIcon />

function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.productReducer.products)
    const status = useSelector((state) => state.productReducer.status)
    const error = useSelector((state) => state.productReducer.error)

    console.log('product in product list : ', products);
    console.log('error in product list : ', error);

    useEffect(() => {
        try {
            dispatch(fetchData())
        } catch (error) {
            console.log(`Error in fetchData calling : ${error.message}`);
        }
    }, [])

    if (status === 'loading') {
        return (
            <div>
                <Spin tip="Loading...">
                    <h1 style={{ textAlign: 'center', marginTop: '100px' }}></h1>
                </Spin>
            </div>
        )
    }

    if (status === 'faild') {
        return (
            <div>
                <Alert style={{ width: '300px', marginInline: 'auto', marginTop: '100px', textAlign: 'center' }}
                    message="Error"
                    description="Somthing went wrong...!"
                    type="error"
                    showIcon
                />
            </div>
        )
    }

    return (
        <div className='productList'>
            {products.map((product) => {
                return (
                    <SingleProduct key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default ProductList