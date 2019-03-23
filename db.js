const Sequelize=require('sequelize');
const db=new Sequelize({
    dialect:'mysql',
    host:'localhost',
    username:'rishu',
    password:'rishu',
    database:'shopping_site'
})
const Vendors = db.define('vendors', {
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
Vendors.hasMany(Products);
Products.belongsTo(Vendors);
const Cartitems=db.define('cartitems',
{
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1
    }
})



Users.hasMany(Cartitems);
Cartitems.belongsTo(Users);

Products.hasMany(Cartitems);
Cartitems.belongsTo(Products);

module.exports={
    db,
    
    Users,Vendors,Products,Cartitems
}