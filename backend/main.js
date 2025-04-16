import express from "express";
import cors from "cors";
const PORT = 5000;
const HOST = 'localhost';
const app = express();

app.use(cors());

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);
});

app.get('/films', (req, res) => {
    console.log('here');
    res.status(200).json([]);
});