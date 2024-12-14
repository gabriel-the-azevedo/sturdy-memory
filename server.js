import express from "express"

const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.post("/add-item", (req, res) => {
    const { item } = req.body
    res.send(`<li hx-delete="/delete-item" hx-swap="outerHTML">${item}</li>`)
})

app.delete("/delete-item", (_, res) => {
    res.status(200).send()
})

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});