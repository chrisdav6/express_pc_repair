const express = require('express');
const router = express.Router();
const fs = require("fs");

let services;
fs.readFile("json/services.json", "utf8", (err, data) => {
  if(err) {
    throw err;
  } else {
    services = JSON.parse(data);
  }
});

/* GET services page. */
router.get('/', (req, res, next) => {
  res.render('services', { 
    title: 'Services',
    services: services 
  });
});

module.exports = router;