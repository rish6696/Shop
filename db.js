const Sequelize=require('sequelize');
const db=new Sequelize({
    dialect:'mysql',
    host:'localhost',
    username:'rishu',
    password:'rishu',
    database:'shopping_site'
})
const Vendors = db.define('vendor', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })

const Users=db.define('users',
{
    name:{
        type:Sequelize.STRING(60),
        allowNull:false
    },
    city: Sequelize.STRING(60)

})
const Products=db.define('products',{
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1,
        allowNull:false
    }

})
const Cartitems=db.define('cartitem',
{
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1
    }
})
Vendors.hasMany(Products);
Products.belongsTo(Vendors);


Users.hasMany(Cartitems);
Cartitems.belongsTo(Users);

Products.hasMany(Products);
Cartitems.belongsTo(Products);

module.exports={
    db,
    
    Users,Vendors,Products,Cartitems
}