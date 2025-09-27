import React from 'react';

const RestaurantCard = ({
    resName, 
    resLogo, 
    resDesc,
    resRating,
    resDeliveryTime,
    resCostForTwo
}) => (
    <div className='res-card'>
        <img className='res-logo' src={resLogo} />
        <div className='res-title'>{resName}</div>
        <div className='rec-desc'>{resDesc}</div>
        <div className='rec-footer'>
            <div className='res-rating'>{resRating}</div>
            <div className='res-delivery-time'>{resDeliveryTime} min</div>
            <div className='res-cost-for-two'>{resCostForTwo} for Two</div>
        </div>
    </div>
)

export default RestaurantCard