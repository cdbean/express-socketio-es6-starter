import express from 'express'

import User from '../models/user.js'


let router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  let user = new User({
    email,
    password
  })
  user.save(err => {
    if (err) {
      res.status(500).json({error: err})
    } else {
      res.status(200).send()
    }
  })
})


export default router
