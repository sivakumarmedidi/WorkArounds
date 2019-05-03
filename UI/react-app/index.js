import express from "express";

const app = express();
const PORT = 9999

app.get("/", (req, res) => {
    res.status(200).send("hello");
});

app.listen(PORT, (err) => {
    if(err) return `Server stopped because of err ${err}`;
    console.log("App is running on port - " + PORT);
    const logSomething = options => ({
        ...options,
        anotherOption: 'Hello!',
    });
    const options = logSomething({ one: '1', two: '2' });
    console.log(options);
});
