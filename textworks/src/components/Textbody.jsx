import { useState } from 'react'
import TextSummary from './TextSummary'

export default function Textbody({ heading, showAlert, textAreaBGColor }) {

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text
        setText(newText.toUpperCase())
        showAlert('coverted to uppercase', 'success')
    }
    const handleLowClick = () => {
        let newText = text
        setText(newText.toLowerCase())
        showAlert('converted to lowercase', 'success')
    }

    const handleClearClick = () => {
        setText('')
        showAlert('cleared', 'success')
    }

    const handleCopy = () => {
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        window.getSelection().removeAllRanges()
        showAlert('copied', 'success')
    }

    const handleExtraSpace = () => {
        let textHelp = text.split(/\s+/)
        setText(textHelp.join(' '))
        showAlert('removed extra spaces', 'success')
    }

    return (
        <div id='home'>
            <div className='container mt-3'>
                <h1>{heading}</h1>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows={8}
                    value={text}
                    placeholder='Enter text Here'
                    onChange={handleChange}
                    style={{backgroundColor: textAreaBGColor}}
                />
                <div className='mt-2'>
                    <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">ConvertToUpperCase</button>
                    <button type="button" onClick={handleLowClick} className="btn btn-primary">ConvertToLowerCase</button>
                    <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2">ClearText</button>
                    <button type="button" onClick={handleCopy} className="btn btn-primary">CopyText</button>
                    <button type="button" onClick={handleExtraSpace} className="btn btn-primary mx-2">RemoveExtraSpace</button>
                </div>
                <TextSummary text={text} />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the box to preview it'}</p>
            </div>
        </div>
    )
}
