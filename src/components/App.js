import React from 'react'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'

const App = () => (
 <div id="page-wrap">
    <Navbar />
    <Header title="Library" />
    <Books />
    <About />
    <Footer />
  </div>
)

export default App
