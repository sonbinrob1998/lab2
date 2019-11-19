//npm init= creation of a pacjkage.json
//npm install --save ejs 
express = require('express')
app = express()

app.set('port', 1337)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)



app.post('/', (req, res) => {
  // POST
})

app
  .put('/', function (req, res) {
    // PUT
  })
  .delete('/', (req, res) => {
    // DELETE
  })
  app.get(
    '/hello/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
  )
  
