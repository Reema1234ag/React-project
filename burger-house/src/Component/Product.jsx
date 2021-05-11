import React from 'react';
import ProductBox from './ProductBox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
function Products(){
    return(
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>HAVE A NICE DAY</p>
            <div className='a-container'>
                <ProductBox image={pimage2} title="Le Pigeon Burger"/>
                <ProductBox image={pimage2} title="Le Pigeon Burger"/>
                <ProductBox image={pimage2} title="Le Pigeon Burger"/>
            </div>
        </div>
    )
}
export default Products;