import express from "express";
// create a server instance
const app = express();

// set costant to port
const port = process.env.PORT || 3000;


//Other imports
import errorsHandler from "./middlewares/errorsHandler.js";
import notFound from "./middlewares/notFound.js";
import corsPolicy from "./middlewares/corsPolicy.js";
import booksRouter from "./routes/books.js";

app.use(express.static("public"));

app.use(corsPolicy);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

//other routes
app.use("/books", booksRouter);
// index leggi lista /books metodo get
// show leggo un solo libro /books/:id metodo get
// store salvo un libro /book metodo post
// update aggiorno un libro /books/:id metodo put
// destroy elimino libro /books/:id metodo delete

app.use(errorsHandler);

app.use(notFound);

//server must listen on your host and your port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}}`);
});
