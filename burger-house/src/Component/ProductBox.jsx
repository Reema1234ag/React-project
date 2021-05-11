import React from 'react';


function ProductBox(props){
    return(
        <div className='a-box'>
            <div className='s-b-img'>
                <img src={props.image} alt=''/>
            </div>

            <div className = 'a-b-text'>
                <h2>{props.title}</h2>
                <button className='productBox-button'>Order Now</button>
            </div>
        </div>
    )
}
export default ProductBox;