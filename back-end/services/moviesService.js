import Movie from "../models/Movies.js";

class movieService{

    async getAll(){
        try{
            const movies = await Movie.find();
            return movies;
        }catch(error){
            console.log(error)
        }
    }
}


export default new movieService();