import React from 'react';
import './MovieFeatured.css';

export default ({ item }) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    let description = item.overview;
    if(description.length > 300){
        description = description.substring(0, 300) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,

        }}>

            <div className="featuredVertical">
                <div className="featuredHorizontal">
                    <div className="featuredName">{item.original_name}</div>
                    <div className="featuredNameInfo">
                        <div className="Rated">{item.vote_average} Pontos</div>
                        <div className="Date">Lançamento: {firstDate.getFullYear()} </div>
                        <div className="Season">{item.number_of_seasons} Temporada{item.number_of_seasons === 1 ? '' : "s"}</div>
                    </div>
                    <div className="overview">{description}</div>
                    <div className="buttons">
                        <a className="link" href={`/watch/${item.id}`}>► Assistir </a>
                        <a className="link" href={`/list/add/${item.id}`}> + Minha Lista </a>
                    </div>
                    <div className="Genres">Gênero: {genres.join(', ')}</div>

                </div>
            </div>
        </section>
    )
}


