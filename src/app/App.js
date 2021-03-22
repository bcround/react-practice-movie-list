import Movie from '../components/Movie/Movie'
import { ReactComponent as Rainbow} from '../assets/rainbow.svg'
import { useMovieListState } from '../hooks/useMovieListState'

function App() {
  const [movies, hasError, isLoading, onSearch] = useMovieListState("https://yts.mx/api/v2/list_movies.json", "?query_term=")
  const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  if (isLoading) {
    return <Rainbow style={loadingStyle}/>
  }

  if (hasError) {
    return <div role="alert">{hasError.message}</div>
  }

  return (
    <div className="App">
      <Movie>
        <Movie.SearchBox onSearch={onSearch} labelContent="" buttonContent="검색"/>
        <Movie.List movies={movies} />
      </Movie>
    </div>
  )
}

export default App
