const db = require('./models')

db.sync({force: false})
  .then(() => {
    console.log('Database synced!')
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
  })

  .finally(() => { 
    db.close()
    console.log('Closing');
  })
