var Product = require('../models/products');
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://spark.adobe.com/images/landing/examples/how-to-book-cover.jpg',
        title: 'HHow to be perfect',
        description: 'Wanna be perfect really then see this!!!',
        price: 15
    }),
    new Product({
        imagePath: 'https://ebookfriendly.com/wp-content/uploads/2014/03/Mr-Mercedes-Stephen-King-animated-book-cover.gif',
        title: 'Mr. Mercedes',
        description: 'stephen king\'s master piece!!!',
        price: 20
    }),
    new Product({
        imagePath: 'http://i.huffpost.com/gen/1039678/original.jpg',
        title: 'Pieces of Light',
        description: 'Get some light man :P !!!',
        price: 12
    }),
    new Product({
        imagePath: 'http://www.thomasflintham.com/images/books_cover_lastwild_A.png',
        title: 'The Last Wild',
        description: 'This is something you really want to see :) !!!',
        price: 25
    }),
    new Product({
        imagePath: 'http://www.creativindie.com/wp-content/uploads/2015/05/GR-lifeboat.jpg',
        title: 'The Life Boat',
        description: 'Don\'t wait for the sea to get calm, set your sails !!!',
        price: 35
    }),
    new Product({
        imagePath: 'http://www.adazing.com/wp-content/uploads/2012/06/journey-to-inner-healing.jpg',
        title: 'A Journey To Inner Healing',
        description: 'Myths and Truths of healing are here !!!',
        price: 40
    }),
    new Product({
        imagePath: 'https://everydaypowerblog.com/wp-content/uploads/2015/12/The-Power-of-Positive-Thinking.jpg',
        title: 'The Power of Positive Thinking',
        description: 'Think positive and stay positive !!!',
        price: 95
        
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