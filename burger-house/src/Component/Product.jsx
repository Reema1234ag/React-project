import React from 'react';
import ProductBox from './ProductBox';

import pimage1 from '../images/veg cheese.jpg';
import pimage2 from '../images/tawa paneer.jpg';
import pimage3 from '../images/Grilled_paneer.jpg';
import pimage4 from '../images/tandoori paneer.jpg';

import pimage5 from '../images/Junior_chicken.jpg';
import pimage6 from '../images/Chicken_Burger.png';
import pimage7 from '../images/triple tikka.jpg';
import pimage8 from '../images/Kebab_Burger.png';

import pimage9 from '../images/chicken wrap.jpg';
import pimage10 from '../images/paneer wrap.jpg';
import pimage11 from '../images/mashroom burger.jpg';
import pimage12 from '../images/egg.jpg';

import pimage13 from '../images/jumbo.jpg';
import pimage14 from '../images/Combo_Meal.jpg';
import pimage15 from '../images/fries.jpg';
import pimage16 from '../images/chiken fries.jpg';

import pimage17 from '../images/c.jpg';
import pimage18 from '../images/softy.jpg';
import pimage19 from '../images/20210510_134220.jpg';
import pimage20 from '../images/20210510_134605.jpg';

function Product(){
    return(
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>The BEST MEMORIES are made AROUND THE TABLE</p>
            <div className='a-container'>
                <ProductBox image={pimage1} title="Veg Cheesy Burger"/>
                <ProductBox image={pimage2} title="Tawa Paneer Burger"/>
                <ProductBox image={pimage3} title="Grilled Paneer Burger"/>
                <ProductBox image={pimage4} title="Tandoori Paneer Burger"/>
            </div>
          
            <div className='a-container'>
                 <ProductBox image={pimage5} title="Junior Chicken Burger"/>
                <ProductBox image={pimage6} title="Chicken Burger"/>
                <ProductBox image={pimage7} title="Grilled Chicken Burger"/>
                <ProductBox image={pimage8} title="Kebab Burger"/>
                
            </div>
          
            <div className='a-container'>
                 <ProductBox image={pimage9} title="Chicken Wrap"/>
                <ProductBox image={pimage10} title="Paneer Wrap"/>
                <ProductBox image={pimage11} title="Mashroom Wrap"/>
                <ProductBox image={pimage12} title="Egg Wrap"/>
                
            </div>
            
            <div className='a-container'>
                 <ProductBox image={pimage13} title="Jumbo Burger"/>
                 <ProductBox image={pimage14} title="Combo Meal"/>
                <ProductBox image={pimage15} title="French Fries"/>
                <ProductBox image={pimage16} title="Chicken Fries"/>
            </div>
           
            <div className='a-container'>
                 <ProductBox image={pimage17} title="Ice Creame"/>
                 <ProductBox image={pimage18} title="Softy"/>
                <ProductBox image={pimage19} title="Choclate Shake"/>
                <ProductBox image={pimage20} title="Soft Drinks"/>
            </div>

        </div>
    )
}
export default Product;