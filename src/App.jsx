import React from 'react'
import "./App.css"
import Router from './routes/Router'
import Nav from './routes/navbar/Nav'

const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Router/>
    </div>
  )
}

export default App