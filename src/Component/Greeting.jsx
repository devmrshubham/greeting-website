import React, { useState } from 'react'
import sun from "./Images/images/sunny.png"
import cloud from "./Images/images/cloud.png"
import morning from "./Images/images/morning.png"
import moon from "./Images/images/moon.png"

const Greeting = () => {

    const [time, setTime] = useState();
    let date = new Date();
    setInterval(() => {
        let date = new Date();
        let currentTime = date.toLocaleTimeString();
        setTime(currentTime)
    }, 1000);


    let hour = date.getHours()
    let msg;
    let Image;

    if (hour >= 5 && hour < 12) {
        msg = "Good Morning"
        Image = morning
    }


    if (hour >= 12 && hour < 18) {
        msg = "Good Afternoon"
        Image = sun
    }


    if (hour >= 18 && hour <= 22) {
        msg = "Good Evening"
        Image = cloud
    }


    if (hour > 22) {
        msg = "Good Night"
        Image = moon
    }

    if (hour < 5) {
        msg = "Good Night"
        Image = moon
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 sm-12 md-12  ">
                        <h2>Greeting Website</h2>
                        <h1>{time}</h1>
                        <p>{msg}</p>
                        <img src={Image} className=' img-fluid w-50' alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting
