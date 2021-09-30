
const ApiKey = process.env.REACT_APP_API_MOVIE_KEY;
const URL = 'https://api.themoviedb.org/3';

const Search = async (endpoint) => {
    const req = await fetch(`${URL}${endpoint}`);
    const json = await req.json();
    return json;

}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Séries',
                items: await Search(`/discover/tv?api_key=${ApiKey}&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await Search(`/trending/all/week?api_key=${ApiKey}&language=pt-BR&`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await Search(`/movie/top_rated?api_key=${ApiKey}&language=pt-BR&`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await Search(`/discover/movie?api_key=${ApiKey}&lenguage=pt-BR&with_genres=37`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await Search(`/discover/movie?api_key=${ApiKey}&language=pt-BR&with_genres=35`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await Search(`/discover/movie?api_key=${ApiKey}&language=pt-BR&with_genres=27`)
            },
            {
                slug: 'europeu',
                title: 'Europeu',
                items: await Search(`/discover/movie?api_key=${ApiKey}&language=pt-BR&with_genres=16`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await Search(`/discover/movie?api_key=${ApiKey}&language=pt-BR&with_genres=99`)
            }
        ]
    },
    getInfo: async (MovieId, type) =>{
        let info = {};

        if(MovieId){
            switch(type){
                case 'movie':
                    info = await Search(`/movie/${MovieId}?api_key=${ApiKey}&language=pt-BR`)
                break;
                case 'tv':
                    info = await Search(`/tv/${MovieId}?api_key=${ApiKey}&language=pt-BR`)
                break;
                default:
                    info = null
                break;
            }
        }


        return info
    }
}