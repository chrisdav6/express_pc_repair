const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

module.exports = router;