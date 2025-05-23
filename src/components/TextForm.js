import React, {useState} from 'react' 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase(); 
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = ()=>{
        let newText = ''; 
        setText(newText)
        props.showAlert("Text Cleared!", "success")

    }

    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")

        }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "))
        props.showAlert("Extraspaces Removed!", "success")

        }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} and {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box above to preview it here"}</p>
    </div>
    </>
  )
}
