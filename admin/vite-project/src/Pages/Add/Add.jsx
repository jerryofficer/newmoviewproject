import React, { useState } from "react";
import "./Add.css";
import axios from "axios";

const Add = () => {
    const url = "http://localhost:6060/movies"; // ✅ Backend API
    const [data, setData] = useState({
        movieTitle: "",
        moviedescription: "",
        moviemeta: "Movie",
        imageUrl: "", // ✅ Store image URL
    });

    // ✅ Handle text input changes
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // ✅ Handle form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(url, data, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
                console.log("✅ Movie added:", response.data);
                alert("Movie added successfully!"); // ✅ Success alert
                setData({ movieTitle: "", moviedescription: "", moviemeta: "Movie", imageUrl: "" });
            }
        } catch (error) {
            console.error("❌ Error adding movie:", error);
            alert("Failed to add movie.");
        }
    };

    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                {/* ✅ Image URL Input */}
                <div className="add-img-upload flex-col">
                    <p>Image URL</p>
                    <input
                        type="text"
                        name="imageUrl"
                        value={data.imageUrl}
                        onChange={onChangeHandler}
                        placeholder="Enter Image URL"
                        required
                    />
                    {data.imageUrl && <img src={data.imageUrl} alt="Preview" className="image-preview" />}
                </div>

                {/* ✅ Movie Title */}
                <div className="add-product-name flex-col">
                    <p>Movie Title</p>
                    <input
                        type="text"
                        name="movieTitle"
                        value={data.movieTitle}
                        onChange={onChangeHandler}
                        placeholder="Type here"
                        required
                    />
                </div>

                {/* ✅ Description */}
                <div className="add-Movie_description flex-col">
                    <p>Movie Description</p>
                    <textarea
                        name="moviedescription"
                        rows="6"
                        value={data.moviedescription}
                        onChange={onChangeHandler}
                        placeholder="Write Content Here"
                        required
                    ></textarea>
                </div>

                {/* ✅ Category Selection */}
                <div className="add-category flex-col">
                    <p>Movie Category</p>
                    <select name="moviemeta" value={data.moviemeta} onChange={onChangeHandler}>
                        <option value="Movie">Movie</option>
                        <option value="TvShow">Tv Show</option>
                        <option value="MostPopular">Most Popular</option>
                        <option value="TopAiring">Top Airing</option>
                    </select>
                </div>

                <button type="submit" className="add-btn">Add</button>
            </form>
        </div>
    );
};

export default Add;
