import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            My-Blog
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse links"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <Link to="/login" class="nav-item btn btn-primary">Login</Link>
                                <Link to="/register" class="nav-item btn btn-primary">Sign Up</Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
    )
}