import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import {  MOCK_DATA } from '../utils/constants'

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('')
    const [filteredRes, setFilteredRes] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText)
    }


    if(!restaurants?.length) {
        return <Shimmer />
    }

   return  (
    <div className='body'>
        <div className="search">
            <input type='text' className="search-box" value={searchText} onChange={handleSearch} />
            <button onClick={() => {
                const filteredRes = restaurants.filter(res => res?.info?.name?.toLowerCase().includes(searchText))
                setFilteredRes(filteredRes)
            }
               
            }>Search</button>
        </div>
        <div className='filters'>
            <button 
                className="flter-btn"
                onClick={() => {
                    setFilteredRes(restaurants.filter(res => res?.info?.avgRating > 4))
                }}
            >
                Top Rated Restaurant
            </button>
            <button 
                className="flter-btn"
                onClick={() => {
                    setFilteredRes(restaurants)
                }}
            >
                Clear
            </button>
        </div>
        <div className='res-container'>
            {
                filteredRes.map((res, ind) => (
                    <RestaurantCard 
                        key={`${res?.info?.id}-${ind}`}
                        {...res}
                    />
                ))
            }
        </div>
    </div>
)}

export default Body