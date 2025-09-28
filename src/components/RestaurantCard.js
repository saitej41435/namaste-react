import React from 'react';
import { resLogoPrefix } from '../utils/constants'

const RestaurantCard = ({
    info: {
        name = '',
        cuisines = [],
        avgRating = '',
        cloudinaryImageId = '',
        sla= {},
        costForTwo =' '
    } = {}, 
    resDeliveryTime,
    resCostForTwo
}) => (
    <div className='res-card'>
        <img className='res-logo' src={`${resLogoPrefix}/${cloudinaryImageId}`} />
        <div className='res-title'>{name}</div>
        <div className='rec-desc'>{cuisines.join(',')}</div>
        <div className='rec-footer'>
            <div className='res-rating'>{avgRating}</div>
            <div className='res-delivery-time'>{sla?.slaString}</div>
            <div className='res-cost-for-two'>{costForTwo}</div>
        </div>
    </div>
)

export default RestaurantCard