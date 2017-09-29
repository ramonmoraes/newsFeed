var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/newsfeed', function(req, res, next) {

  let feed = [{
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h1Wow',
    date:'27/3/2001',
    content:'Avião caiu na costa do marfin!'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h2Doooggo',
    date:'28/3/2001',
    content:'Ontem um avião caiu na costa do marfin!,Ontem um avião caiu na costa do marfin!,Ontem um avião caiu na costa do marfin!'
  }]
  res.send(feed)
});

module.exports = router;
