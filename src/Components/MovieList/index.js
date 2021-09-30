import React, { useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import './movielist.css'

const MovieList = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleClickLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        }
        setScrollX(x);
    }
    const handleClickRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }
    
    return (
        <div className="movieListArea">
            <h2>{title}</h2>
            <div className="ArrowLeft" onClick={handleClickLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 60}} />
            </div>
            <div className="ArrowRight" onClick={handleClickRightArrow}>
                <NavigateNextIcon style={{fontSize: 60}} />
            </div>
            <div className="listArea">
                <div className="movieList" style={
                    { marginLeft: scrollX,
                        width: items.results.length * 150
                    }
                }>
                    {items.results.length > 0 && items.results.map((items, key) => (
                        <div key={key} className="movieItem">
                            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={items.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
export default MovieList;