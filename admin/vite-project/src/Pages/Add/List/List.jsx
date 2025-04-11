import React, { useState, useEffect } from "react";
import "./List.css";

const API_URL = "http://localhost:6060"; // Ensure this matches your backend

const List = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;
  const [editingMovie, setEditingMovie] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");

  // Fetch Movies from Backend
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${API_URL}/movie`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // DELETE Function
  const deleteMovie = async (_id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        const response = await fetch(`${API_URL}/movie/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          setMovies(movies.filter(movie => movie._id !== _id));
          alert("Movie deleted successfully!");
        } else {
          alert("Failed to delete movie.");
        }
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    }
  };

  // Enable Edit Mode
  const enableEdit = (movie) => {
    setEditingMovie(movie._id);
    setUpdatedTitle(movie.movieTitle);
    setUpdatedDescription(movie.moviedescription);
    setUpdatedCategory(movie.moviemeta);
    setUpdatedImage(movie.image);
  };

  // UPDATE Function
  const updateMovie = async (id) => {
    try {
      const response = await fetch(`${API_URL}/movie/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movieTitle: updatedTitle,
          moviedescription: updatedDescription,
          moviemeta: updatedCategory,
          image: updatedImage,
        }),
      });

      if (response.ok) {
        setMovies(movies.map(movie =>
          movie._id === id ? { ...movie, movieTitle: updatedTitle, moviedescription: updatedDescription, moviemeta: updatedCategory, image: updatedImage } : movie
        ));
        alert("Movie updated successfully!");
        setEditingMovie(null); // Exit edit mode
      } else {
        alert("Failed to update movie");
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  // Pagination Logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const nextPage = () => {
    if (currentPage < Math.ceil(movies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <center><h2>Admin Panel - Movie Table</h2></center>
      <table className="movie-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map(movie => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>
                {editingMovie === movie._id ? (
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                  />
                ) : (
                  movie.movieTitle
                )}
              </td>
              <td>
                {editingMovie === movie._id ? (
                  <input
                    type="text"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                ) : (
                  movie.moviedescription
                )}
              </td>
              <td>
                {editingMovie === movie._id ? (
                  <input
                    type="text"
                    value={updatedCategory}
                    onChange={(e) => setUpdatedCategory(e.target.value)}
                  />
                ) : (
                  movie.moviemeta
                )}
              </td>
              <td>
                {editingMovie === movie._id ? (
                  <input
                    type="text"
                    value={updatedImage}
                    onChange={(e) => setUpdatedImage(e.target.value)}
                  />
                ) : (
                  <img src={movie.image} alt={movie.movieTitle} className="movie-image" />
                )}
              </td>
              <td>
                {editingMovie === movie._id ? (
                  <button className="btn save" onClick={() => updateMovie(movie._id)}>Save</button>
                ) : (
                  <>
                    <button className="btn update" onClick={() => enableEdit(movie)}>Update</button>
                    <button className="btn delete" onClick={() => deleteMovie(movie._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="pagination1">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {Math.ceil(movies.length / moviesPerPage)} </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}>Next</button>
      </div>
    </>
  );
};

export default List;
