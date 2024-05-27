import  express from "express";

import cors from 'cors';
import empRouter from './Routers/EmployeeRouter.js'

const app = express();
const PORT = 5000;
app.use(express.json())
app.use(cors( 
))

app.use('/api',empRouter)

app.get('/',(req,res)=>{
    res.status(200).send("Api is runniong successfully")
})

app.listen(PORT, ()=>{
    console.log("App is running in the ",PORT);
})