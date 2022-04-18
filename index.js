const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"))

const contactsRout = require("./routes/contacts");
const commentsRout = require("./routes/comments");
const productsRout = require("./routes/products");
const vehiclesRout = require("./routes/vehicles");

const port = process.env.PORT || 4001;

app.use(contactsRout)
app.use(commentsRout)
app.use(productsRout)
app.use(vehiclesRout)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
