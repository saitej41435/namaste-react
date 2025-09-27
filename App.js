import React from 'react'
import { createRoot } from 'react-dom/client'

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000' alt='logo'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

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

const resData = [
    {
        resId: 1,
        resName: 'Raju gari biryani',
        resLogo: 'https://wallpaperaccess.com/full/4622468.jpg',
        resDesc: 'Biryani, Andhra, Sount Indian',
        resRating: '4.2',
        resDeliveryTime: '30',
        resCostForTwo: '₹400'
    },
    {
        resId: 2,
        resName: 'KFC',
        resLogo: 'https://tse2.mm.bing.net/th/id/OIP.RyREgFslWVWJC08y-CUEMwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3',
        resDesc: 'Italian, Pizza, Fast Food',
        resRating: '4.7',
        resDeliveryTime: '45',
        resCostForTwo: '₹700'
    }
]

const Body = () => (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            {
                resData.map((res) => (
                    <RestaurantCard 
                        key={res.resId}
                        {...res}
                    />
                ))
            }
        </div>
    </div>
)

const AppLayout = () =>(
    <div className='app'>
        <Header />
        <Body />
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<AppLayout />)
