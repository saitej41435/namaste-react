import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";

import {  MOCK_DATA } from '../utils/constants'

const Body = () => {
    const [restaurants, setRestaurants] = useState(MOCK_DATA);
   return  (
    <div className='body'>
        <div className='filters'>
            <button 
                className="flter-btn"
                onClick={() => {
                    setRestaurants(restaurants.filter(res => res.resRating > 4))
                }}
            >
                Top Rated Restaurant
            </button>
            <button 
                className="clear-btn"
                onClick={() => {
                    setRestaurants(MOCK_DATA)
                }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className='res-container'>
            {
                restaurants.map((res) => (
                    <RestaurantCard 
                        key={res.resId}
                        {...res}
                    />
                ))
            }
        </div>
    </div>
)}

export default Body