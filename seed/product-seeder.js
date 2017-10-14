var Product = require('../models/products');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    

];
var done = 0;
for(var i = 0; i < products.length; i++)
{
    products[i].save((err, res)=>{
        done++;
        if(done==products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}