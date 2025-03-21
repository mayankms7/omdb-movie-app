import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/movies/${id}`).then((response) => {
        setMovie(response.data);
      });
    }
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <p>Actors: {movie.Actors}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
