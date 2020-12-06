import React, { Component } from 'react';
import {MenuItens} from "./MenuItens";
import {Link} from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component{
    state = { clicked: false}

    handClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItens">
                <h1 className="navbar-logo">FullStack<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItens.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                 className={item.CName} to={item.url}>

                                {item.titulo}

                                
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {/* <input placeholder="Buscar produto"></input> */}
                <button className='btn btn-primary'>Pesquisar</button>
            </nav>
        )
    }
}

export default Navbar