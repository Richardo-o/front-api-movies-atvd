import express from "express";
import mongoose from 'mongoose';
const app = express();
import Movies from "./models/Movies.js"
import movieRoutes from "./routes/movieRoutes.js";



app.use(express.urlencoded({extended:false}))
app.use(express.json())
mongoose.set('strictQuery', true);




app.use("/", movieRoutes)



async function testConnection(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/api-movies");
    console.log("Conexão feita!")
  }catch(error){
    console.log("Ocorreu um erro na conexão")
  }
}
testConnection();




const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("O ocorreu um erro: " + error);
  } else {
    console.log(`O servidor foi iniciado http://localhost:${port}`);
  }
});
