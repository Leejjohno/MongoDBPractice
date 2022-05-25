const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    // the following is a list of commands
    try {
        if (yargsObj.add) {
            // add movie to db
            await addMovie({ title: yargsObj.title }, collection);
        } else if (yargsObj.list) {
            // list movies from db
             await listMovies(collection);
        } else if (yargsObj.update) {
            // update movies in the db
            await updateMovie({ title: yargsObj.title }, collection);
        } else if (yargsObj.delete) {
            // delete movies in the db
            await deleteMovie({ title: yargsObj.title }, collection);
        } else {
            // anything else typed in is invalid
            console.log("Incorrect command")
           
        } 
    } catch (error) {
        console.log(error);
    }  await client.close();
};

app(yargs.argv);