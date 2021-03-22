import { useState, useEffect } from 'react'

export function useMovieListState(APIurl, query = '') {
  const [movies, setMovies] = useState([])
  const [hasError, setHasError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [movieName, setMovieName] = useState("")
  
  const onSearch = e => {
    e.preventDefault()
    setMovieName(e.target.previousElementSibling.value)
  }


  useEffect(() => {
    setIsLoading(true)

    fetch(`${APIurl + query + movieName}`)
      .then(response => response.json())
      .then(({data}) => {
        if (data.movie_count !== 0) setMovies(data.movies)
        else setMovies(['No movies found'])
        setIsLoading(false)
      })
      .catch(err => {
        setHasError(err)
        setIsLoading(false)
      })
  }, [APIurl, movieName, query])

  return [movies, hasError, isLoading, onSearch]

}