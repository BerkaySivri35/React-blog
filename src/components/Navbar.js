import { useNavigate, Link } from "react-router-dom";
import React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.changeDil = this.changeDil.bind(this);
        this.DilTr = this.DilTr.bind(this);
        this.state= {
            anasayfa: "Anasayfa",
            hakkimizda:"Hakkımızda",
            makaleler: "Makaleler",
            egitimler:"Eğitimler",
            portfolyo:"Portfolyo",
            iletisim:"İletişim",
            dil:"TR",
        }
        
    }

    changeDil(){
        console.log("ingilizce")
        this.setState({
            anasayfa: "Homepage",
            hakkimizda:"About",
            makaleler: "Articles",
            egitimler:"Educations",
            portfolyo:"Portfolio",
            iletisim:"Contact",
            dil:"EN"
        })
    }
    DilTr(){
        this.setState({
            anasayfa: "Anasayfa",
            hakkimizda:"Hakkımızda",
            makaleler: "Makaleler",
            egitimler:"Eğitimler",
            portfolyo:"Portfolyo",
            iletisim:"İletişim",
            dil:"TR",
        }) 
    }    

    render(){
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
                                <Link className="nav-link active" aria-current="page" to="/">{this.state.anasayfa}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{this.state.hakkimizda}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articles">{this.state.makaleler}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/educations">{this.state.egitimler}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">{this.state.portfolyo}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{this.state.iletisim}</Link>
                            </li>

                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {this.state.dil}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#" onClick={this.DilTr}>Turkish</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={this.changeDil}>English</a></li>


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
    
}

export default Navbar;