var express = require('express');
var router = express.Router();
var model = require('../models/index')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});

// POST users
router.post('/users', async function (req, res, next) {
  try {
    const {
      name,
      email,
      gender,
      phoneNumber
    } = req.body;
    const users = await model.users.create({
      name,
      email,
      gender,
      phone_number: phoneNumber
    });
  if (users) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': users,
    })
  }
 } catch (err) {
   console.log(err)
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
});
// UPDATE users
router.patch('/:id', function(req, res, next) {
});
// DELETE users
router.delete('/:id', function(req, res, next) {
});



module.exports = router;
