import React from "react"
import Info from "./componenets/Info.js"
import Intrest from "./componenets/Intrest.js"
import About from "./componenets/About.js"
import Footer from "./componenets/Footer.js"


export default function App(){
    return(
        <div className="body">
            <Info/>
            <div className ="text">
                <About/>
                <Intrest/>
            </div>
            <Footer/>  
        </div>
    )
}