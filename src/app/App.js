import {useState, useEffect} from 'react'


function App() {
  const [movies, setMovies] = useState([])
  const [hasError, setHasError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data)
        setMovies(data.movies)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1 className="movieHeading">List of Movies</h1>
      <div className="movieBody">
        <ul className="movieList">
          {
            movies.map(movie => {
              return(
                <li key={movie.id}>
                  <figure>
                    <img src={movie.background_image} alt={movie.title}/>
                    <figcaption>{movie.title_long}</figcaption>
                  </figure>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
