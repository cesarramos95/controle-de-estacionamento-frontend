app.get('/dashboard', verifyToken, (req, res) => { //verifyToken is middleware
    jwt.verify(req.token, 'the_secret_key', err => { // verifies token
      if (err) { // if error, respond with 401 code
        res.sendStatus(401)
      } else { // otherwise, respond with private data
        res.json({
          events: events
        })
      }
    })
  })