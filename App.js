import React from 'react'
import ReactDOM from 'react-dom/client'

const header1= React.createElement('h1', {id: 'header1', key: 0 }, 'Hello World')
const header2= React.createElement('h1', {id: 'header2', key: 1 }, 'Hello react')
const child = React.createElement('div', {id: 'child'}, [header1, header2])
const parent = React.createElement('div', {id: 'parent'}, child)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)