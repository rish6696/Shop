const express=require('express');
const app=express()

const{
    db
}=require('./db');

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const routes={
    vendors:require('./routes/Vendors'),
    products:require('./routes/Products'),
    users:require('./routes/Users')
}
app.use('/vendors',routes.vendors);
app.use('/users',routes.users);
app.use('/products',routes.products);

db.sync()
.then(()=>{
    app.listen(12345)
})
.then(()=>{
    console.log("server started")
})
