import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../Components/Pages/About'
import Error from '../Components/Pages/Error404'
import Home from '../Components/Pages/Home'
import Recipes from '../Components/Pages/Recipes'
import Header from './header/Header'
import Footer from './footer/Footer'


export default function Rotas() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route Path="/" element={<Home />} />
                <Route Path="/Recipes" element={<Recipes />} />
                <Route Path="/About" element={<About />} />
                <Route Path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}