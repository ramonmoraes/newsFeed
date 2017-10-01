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
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h2Doooggo',
    date:'28/3/2001',
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h1Wow',
    date:'27/3/2001',
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h2Doooggo',
    date:'28/3/2001',
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h1Wow',
    date:'27/3/2001',
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon: 'https://icon-icons.com/icons2/146/PNG/256/plane_21482.png',
    title:'h2Doooggo',
    date:'28/3/2001',
    content:'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  },
  {
    icon:"https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/15826136_1309981322399512_7501706855338286227_n.jpg?oh=0bcc32ba2cf5f88a4e85d37153242920&oe=5A449EBB",
    title:'Margarida',
    date:'everyday',
    content:'margarida me ame biiixo oolloco meu'
  }]
  res.send(feed)
});

module.exports = router;
