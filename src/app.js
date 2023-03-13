import express from "express";
import morgan from "morgan";

//Routes
import EventsRoutes from "./routes/Event.routes.js";

const app = express();

//settings
app.set("port", 4000);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/Events", EventsRoutes);

export default app; 
