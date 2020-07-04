import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import user from './routes/user';
import product from './routes/product';
import order from './routes/order';




mongoose.connect("mongodb://localhost/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(console.log("DB CONNECTED"))
.catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());
app.use("/api/users", user);
app.use("/api/products", product);
app.use("/api/orders", order);



app.listen(5000, () => { console.log("Server running at port 5000") });
