import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import {userRouter} from './routes/users.js';
import { recipesRouter} from "./routes/recipes.js";

const app = express();


app.use(express.json());
app.use(cors());
//switch to his code
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

 
mongoose.connect("mongodb+srv://sallinkoutev:Nillas2468@recipes.k4uuh5z.mongodb.net/recipes?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.listen(3001, () => console.log("SERVER START"));