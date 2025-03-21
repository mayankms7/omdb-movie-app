const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
