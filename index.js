// Required Dependencies 
import express, { urlencoded, json, static } from "express";
import logger from "morgan";
import { connect } from "mongoose";

// Server 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static("public"));

connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


// Imported Models 


// Imported Routes 


// Start the Server 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});