import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
             <div className="logo">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
            </div>
            <div className="Menu">
                <nav className="Nav">
                    <a href="">Início</a>
                    <a href="">Séries</a>
                    <a href="">Filmes</a>
                    <a href="">Minha Lista</a>
                </nav>
            </div>
             <div className="user">
             <img src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png" />
            </div>
           
        </header>
   
    )
}


