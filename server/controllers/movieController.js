const axios = require("axios");
const Movie = require("../models/Movie");

exports.searchMovies = async (req, res) => {
  try {
    const { title } = req.query;
    const apiKey = process.env.OMDB_API_KEY;
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

exports.getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const apiKey = process.env.OMDB_API_KEY;
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};
