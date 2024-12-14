import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <h2>Laura Smith</h2>
            <h4>Frontend Developer</h4>
            <h5>laurasmith.website</h5>
            <button type="button" onclick="location.href='mailto:example@email.com';">Email</button>
        </div>
    )
}