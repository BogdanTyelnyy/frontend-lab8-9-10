import express from "express";
import cors from "cors";
import fs from "fs";
const PORT = 5000;
const HOST = 'localhost';
const app = express();

app.use(cors());

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);
});

app.get('/films', (req, res) => {
    try {
        fs.promises.readFile(
            './database/films.json', { 
                encoding: "utf-8"
            }).then(films => {
                res.status(200).json(JSON.parse(films));
            });
    } catch {
        res.status(404);
    }
});