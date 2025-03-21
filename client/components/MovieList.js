import Link from "next/link";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
