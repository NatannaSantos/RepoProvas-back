import express, { json } from "express";
import cors from "cors";
import router from "./routes/router.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const app=express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

