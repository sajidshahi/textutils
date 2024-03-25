// rfc-  to import react function based component.

import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

// const [count, setCount] = useState(0)- Formull to use hooks.
const [text, setText]= useState("");
// const [mode, setMode]= useState ('light');

const handleOnChange =(event)=>{
setText(event.target.value);
}

const handleUpClick =()=>{
    let newText=text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to the Uppercase!", "success");
}

const handleLoClick =()=>{
    let newText=text.toLowerCase()
    setText(newText);
    props.showAlert("Converted to the Lowercase!", "success");
}
const handleClearClick =()=>{
    let newText=''
    setText(newText);
    props.showAlert("Text cleared!", "success");
}

const handleCopyClick =()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
}

const handleExtraSpaceClick =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  
    return (
        <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2 className="my-4 mb-4">{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value= {text} id="myBox" rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#6f95b7', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
        
    </div>

    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2 className='my-4'>Your Text Summary</h2>
        <p>
        <strong>Sentences: </strong> {text.split(/[.!?]+/).filter((sentence)=>{return sentence.trim().length>0}).length} <strong>Words: </strong> {text.split(/\s+/).filter((words)=>{return words.length !==0}).length} <strong>Characters: </strong> {text.replace(/\s/g, '').length}
        </p>
        <p>{0.008*text.split(/\s+/).filter((words)=>{return words.length !==0}).length} Minutes Reads</p>
        <h2> Preview:</h2>
        <p>{text.length>0?text:'No text to preview!'}</p>
       
    </div>

    </>

  )
}

TextForm.prototype={
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps={
    headig:"Enter Your Text"
}
