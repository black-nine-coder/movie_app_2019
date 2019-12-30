import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// react는 자동적으로 class component의 render method를 실행한다.
// class component는 state 를 사용하기 위함
// setState를 호출할때 react는 새로운 state와 함께 render function을 호출!
class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        // es6
        const { 
            data: { 
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false }) 
    }
    
    componentDidMount() {
        this.getMovies();
    }

    // react는 render function을 refresh하지 않는다.
    // setState를 통해 render function refresh
    render() {
        const { isLoading, movies } = this.state;
        console.log(isLoading);
        return (
            <section className="container">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">
                            Loading....
                        </span>
                    </div>
                ) : ( 
                <div className="movies">
                    {movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image} 
                            genres={movie.genres.splice(0,3)}
                        />
                    ))}
                </div>
                )}
            </section>
        );
    }
}

export default Home;