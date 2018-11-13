const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr')



const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER
    },
    shaded: {
        type: Sequelize.BOOLEAN
    }
})

const Vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    planted_on: {
        type: Sequelize.DATE
    }
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

let obj = {name: 'tomatoe', color: 'red', planted_on: new Date()}
let obj2 = {name: 'tomatoe', color: 'red', planted_on: new Date()}


const tomato = Vegetable.build(obj,obj2)
.save()
.then(veggie =>{
    return veggie.update();
})
.then(veggie =>{
    return veggie;
})






module.exports = db;