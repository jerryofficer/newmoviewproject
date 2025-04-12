const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const MovieModel = require("./MovieSchem")
const router = express.Router();
const bodyParser = require("body-parser");

// const multer = require("multer");
// const path = require("path");



app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));




//connection
mongoose.connect('mongodb+srv://Divya:jerryofficer@cluster0.vg6jnb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    .then(() => {
        console.log("connection is connect")
    })
    .catch((err) => {
        console.log(err);
    });


let movies = [
    { id: 1, movieTitle: "Inception", moviedescription: "Mind-bending thriller", moviemeta: "Sci-Fi" },
    { id: 2, movieTitle: "Titanic", moviedescription: "Romantic drama", moviemeta: "Romance" },
];


app.delete("/movie/:id", async (req, res) => { // ✅ Corrected Route Parameter
    try {
        const deletedMovie = await MovieModel.findByIdAndDelete(req.params.id); // ✅ Corrected Reference
        if (!deletedMovie) return res.status(404).json({ error: "Movie not found" });

        res.json({ message: "Movie deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete movie" });
    }
});


// ✅ Update Movie
app.put("/movie/:id", async (req, res) => {
    try {
        const updatedMovie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Returns the updated document
            runValidators: true, // Ensures validation rules apply
        });

        if (!updatedMovie) return res.status(404).json({ error: "Movie not found" });

        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to update movie" });
    }
});





//Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})



const Users = mongoose.model("userdata", userSchema, "userdata")

//Signup     
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const existinguser = await Users.findOne({ email });
    if (existinguser) {
        return res.json(400).json({ message: "user already exist" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = new Users({ name, email, password: hashpassword });
    await user.save();
    res.json({ message: "user registerd successfully" });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "user does not exist" });
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secretkey");
    res.json({ token });
})



// user data
app.get("/users", async (req, res) => {
    try {
        const users = await Users.find({}, "-password"); // Excludes password from response
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


// user delete
// ✅ Delete User by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });

        res.json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
});



// ✅ Update User by ID
app.put("/users/:id", async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedUser = await Users.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true, runValidators: true }
        );

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
});


// Adminlogin

app.post("/admin/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "Divyathapa" && password === "Divya@1234") {
        const token = jwt.sign({ role: "admin" }, "secretkey", { expiresIn: "1h" });
        return res.json({ message: "Login successful", token });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});


app.post("/movies", async (req, res) => {
    try {
        const { movieTitle, moviedescription, moviemeta, imageUrl } = req.body;

        if (!movieTitle || !moviedescription || !moviemeta || !imageUrl) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newMovie = new MovieModel({ movieTitle, moviedescription, moviemeta, imageUrl });
        await newMovie.save();
        res.status(201).json({ message: "Movie added successfully!", newMovie });
    } catch (error) {
        console.error("❌ Error adding movie:", error);
        res.status(500).json({ message: "Server error", error });
    }
});




app.get("/movie", async (req, res) => {
    const watch = await MovieModel.find({});
    res.send(watch)
})


app.listen(6060, () => {
    console.log("server started at http://localhost:3535");
})