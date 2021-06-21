mongoose = require('mongoose');
const Menu = require('./model/menu');

mongoose.connect('mongodb://localhost:27017/pizza', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('database connected')
})
    .catch((e) => { console.log(e) });


/*const p= new Menu( {
    name:'pizza',
    image:'#',
    price:120

})

p.save().then(p=>{
    console.log(p);
}).catch(e=>{
    console.log(e);
})
*/

const seedd = [
    {
        name: 'pizza',
        image: 'img/pizza.png',
        price: 120
    },
    {
        name: 'pizza',
        image: 'img/pizza.png',
        price: 100
    },
    {
        name: 'pizza',
        image: 'img/pizza.png',
        price: 80
    },
    {
        name: 'pizza',
        image: 'img/pizza.png',
        price: 60
    },
    {
        name: 'pizza',
        image: 'img/pizza.png',
        price: 40
    }
]

Menu.insertMany(seedd)
.then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
})