const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        {movie.Title} ({movie.Year})
      </p>
    </div>
  );
};

export default MovieCard;
