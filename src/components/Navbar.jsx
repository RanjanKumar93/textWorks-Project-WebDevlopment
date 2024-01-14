import PropTypes from 'prop-types'

const Navbar = ({ title, handleDarkClick, handleColorClick, handleLightClick }) => {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    AboutUs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <h5 className={`mx-2 my-auto text-light`} >Modes</h5>
                    <label className="btn btn-secondary active" onClick={handleLightClick}>
                        <input
                            type="radio"
                            name="options"
                            id="option1"
                            autoComplete="off"
                            defaultChecked=""
                        />{" "}
                        Light
                    </label>
                    <label className="btn btn-secondary" onClick={handleDarkClick}>
                        <input type="radio" name="options" id="option2" autoComplete="off" /> Dark
                    </label>
                    <label className="btn btn-secondary" onClick={handleColorClick}>
                        <input type="radio" name="options" id="option3" autoComplete="off" /> Color
                    </label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title Here'
}