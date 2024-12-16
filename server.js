import express from "express"

const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
    res.render("index")
})

app.post("/add-item", (req, res) => {
    res.render("item", { item: req.body.item })
})

app.delete("/clean-delete", (_, res) => {
    res.status(200).send()
})

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});