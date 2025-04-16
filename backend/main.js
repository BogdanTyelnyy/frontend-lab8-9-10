import express from "express";
const PORT = 5000;
const HOST = 'localhost';
const app = express();

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);
});