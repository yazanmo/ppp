const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers

const signUpRouter = require("./routers/routes/signup");
const roleRouter = require("./routers/routes/role");
const loginRouter = require("./routers/routes/login");
const buyerRouter = require("./routers/routes/buyer");



//built-in middlewares
app.use(express.json());
app.use(cors());

//third-party middleware



//app routers

app.use(signUpRouter);
app.use(roleRouter);
app.use(loginRouter);
app.use(buyerRouter);



const PORT =5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
