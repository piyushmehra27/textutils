import React,{useState} from 'react'

export default function TextForm(props) {
  const handleChange= (event) =>{
    console.log("text change");
    setText(event.target.value);
    
      }
    
  const handleupClick = () =>{
console.log("upper case was clicked");
let newText= text.toUpperCase();
setText(newText);
props.showAlert("converted to uppercase","success");
  }
  const handleloClick = () =>{
    console.log("lower case was clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
      }
      const handleclearClick = () =>{
        console.log("Text was cleared");
        let newText= (" ");
        setText(newText);
        props.showAlert("Text has cleared","success");
          }
          const handleCopy = () => {

          var text= document.getElementById("myBox");
          text.select();
        //text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success");
          }
          const handleExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra space removed","success");


          }
                 const [text,setText]= useState('');


  return (
    <>
    <div className='container' style={{ color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1> 
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleChange}  style={{ backgroundColor:props.mode==='dark' ?'#212529':'white',color:props.mode ==='dark' ?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-outline-primary" onClick={handleupClick}> Convert To Upper Case</button>
<button className='btn btn-outline-primary mx-3' onClick={handleloClick}> Convert To Lower Case</button>
<button className='btn btn-outline-primary mx-3' onClick={handleclearClick}> Clear text</button>
<button className='btn btn-outline-primary mx-3' onClick={handleCopy}> copy text</button>
<button className='btn btn-outline-primary mx-3' onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className='container my-3'style={{ color:props.mode==='dark' ?'white':'#042743'}}>

<h1> Your  Text Summary</h1>
<p> {text.split(" ").length} and {text.length} charcters   </p>
<p> {0.008*text.split(" ").length} minutes to read </p>
<h2>Preview</h2>
<p>{text.length>0?text:"enter something in th textbox to preview it here"}</p>
    </div>
    </>
  )
}
