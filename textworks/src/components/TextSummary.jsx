const TextSummary = ({text}) =>  {

    let newText = text
    const words = newText.split(/\s+/).filter((x) => x.length>0)

    return (
        <div className="mt-2">
            <h2>Your Text Summary</h2>
            <p>{words.length} words and {text.length} characters</p>
            <p>{(1/4)*words.length} seconds({((1/4)*words.length)/60} minutes) will take to read it completely</p>
        </div>
    )
}

export default TextSummary