import React from "react"

export default function Info(){
    return(
        <div className = "info-container">
            <img src ="../assects/wallpaper.jpeg" className="profile-photo"/>
            <h2 className="name">Aryan Bramhane</h2>
            <p className="title">A frontend Devloper</p>
            <div>
                <button className="email-button"><ion-icon name="mail" size="xl" className="email-icon"></ion-icon><p>Email</p></button>
            </div>
        </div>
    )
}