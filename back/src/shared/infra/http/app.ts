import express, { response, request } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Ok, Server is running",
    });
});

export { app };
