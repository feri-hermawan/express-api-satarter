import express from 'express'
import { publicRouter } from './route/public-route.js';
import 'dotenv/config'
import { ErrorMiddleware } from './middleware/error-middleware.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(publicRouter);
app.use(ErrorMiddleware)

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
