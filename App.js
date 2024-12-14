import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="business-card-container">
            <img src="./portrait.jpg" alt="Portrait Photo" width="100%" />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}