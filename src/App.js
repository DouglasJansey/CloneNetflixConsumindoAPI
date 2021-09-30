import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import MovieFeatured from './Components/MovieFeatured';
import Server from './Components/server';
import Header from './Components/Header'
import './App.css'


function App() {

  const [movieList, setMovieList] = useState([]);
  const [dataFeatured, setDataFeatured] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const LoadingAll = async () => {
      let list = await Server.getHomeList();
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let Movie = originals[0].items.results[random];
      let InfoMovie = await Server.getInfo(Movie.id, 'tv')
      setDataFeatured(InfoMovie)
      console.log(InfoMovie)
    }
    LoadingAll();
  }, []);

  useEffect(() => {

    const scrollListener = () => {
      if (window.scrollY > 1) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className="page">

      <Header black={blackHeader} />
      {dataFeatured &&
        <MovieFeatured item={dataFeatured} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}    
      </section>
          {movieList.length <= 0 &&
          <div className="loading">
          <img src="https://blog.ecadauma.com.br/wp-content/uploads/2020/04/netflix-loading.gif" alt="Carregando" />
          </div>}
         
    </div>
  );
}

export default App;
