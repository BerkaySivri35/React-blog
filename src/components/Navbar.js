import { useNavigate, Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/main">
                        <img className="logo rounded-circle" src="logo.jpg" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/main">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Hakkımızda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">Makaleler</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/educations">Eğitimler</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolyo.html">Portfolyo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="iletisim.html">İletişim</Link>
                            </li>

                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        TR
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Turkish</a></li>
                                        <li><a className="dropdown-item" href="#">English</a></li>


                                    </ul>
                                </li>
                            </ul>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;