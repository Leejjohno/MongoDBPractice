exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ title: movieObj.title });
    if (response.acknowledged) {
      console.log("Succesffully added movie");
    } else {
      console.log("Something went wrong");
    }
  };
  
  exports.updateMovie = async (movieObj, collection) => {
    const response = await collection.updateOne({ title: movieObj.title });
    if (response.acknowledged) {
        console.log("Succesffully changed movie");
      } else {
        console.log("Something went wrong");
      }
  };

  exports.deleteMovie = async (movieObj, collection) => {
      const response = await collection.deleteOne({ title: movieObj.title });
      if (response.acknowledged) {
        console.log("Succesffully deleted movie");
      } else {
        console.log("Something went wrong");
      }
  };

  exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray(); // without .toArray this will list everything ever.
    console.log("List:\n", movies);
  };