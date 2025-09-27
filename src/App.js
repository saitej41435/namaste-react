import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/Header'
import Body from './components/Body'






const AppLayout = () =>(
    <div className='app'>
        <Header />
        <Body />
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<AppLayout />)
