// rfc-  to import react function based component.

import React from 'react'

export default function About(props) {

    let myStyle={
        color: props.mode==='dark'? 'white': 'black',
        backgroundColor: props.mode==='dark'? '#021c36': 'white'

        
    }
        
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze Your Text: </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils is a tool for in-depth analysis of written content. It offers insights into grammar, readability, and sentiment, empowering users to enhance their writing with clarity and impact. Perfect for students, professionals, and anyone seeking to refine their communication skills efficiently.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>Free to Use:</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils is a free, user-friendly tool that provides detailed analysis of written content. With some of the most used/ required features such as converting to the upper/lower case, copying or clearing text, and removing extra spaces. it's perfect for students, writers, and professionals seeking to improve their writing skills. Start using it today to enhance your communication effortlessly and for free.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            <strong>Browser Compatible:</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils is a free, browser-compatible tool accessible across various platforms. Whether you're using Chrome, Firefox, Safari, or any other modern browser, you can easily analyze your text.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
