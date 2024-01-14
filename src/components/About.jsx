import { useState } from 'react'

const About = () => {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    })

    const [modeText, setModeText] = useState("DarkMode")

    const handleMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white',
                border: "1px solid white"
            })
            setModeText('LightMode')
        } else if (myStyle.color === 'white') {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            }
            )
            setModeText('DarkMode')
        }
    }

    return (
        <>
            <div className="container" id='about'>
                <h1 className='my-2' >About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={myStyle}
                            >
                                We are the BEST
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                            style={myStyle}
                        >
                            <div className="accordion-body" >
                                <strong>WE ARE THE BEST.</strong>What we do here is the Best In The World.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleMode} type="button" className="btn btn-primary my-2">{modeText}</button>
                </div>
            </div>
        </>
    )
}

export default About