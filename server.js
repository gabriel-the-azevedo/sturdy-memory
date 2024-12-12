import express from "express"

const app = express()
const port = 3000
app.use(express.static("public"))

app.post("/clicked", (_, res) => {
    res.send("<h2>Clicked<h2>")
})

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});