var express = require('express')
var router = express.Router();
var jwt = require('jsonwebtoken');

const movies = [
  {
    name: "The Matrix",
    year: 1999,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    country: "USA",
    imdbLink: "https://www.imdb.com/title/tt0133093/",
    wikipedia: "https://en.wikipedia.org/wiki/The_Matrix",
    rating: 9,
    summary: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    characters: [
      {
        name: "Neo",
        playedBy: "Keanu Reeves"
      },
      {
        name: "Morpheus",
        playedBy: "Laurence Fishburne"
      },
      {
        name: "	Trinity",
        playedBy: "Carrie-Anne Moss"
      }
    ]
  },
  {
    name: "The Matrix Reloaded",
    year: 2003,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    country: "USA",
    imdbLink: "https://www.imdb.com/title/tt0234215/",
    wikipedia: "https://sh.wikipedia.org/wiki/The_Matrix_Reloaded",
    rating: 7,
    summary: "Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.",
    characters: [
      {
        name: "Neo",
        playedBy: "Keanu Reeves"
      },
      {
        name: "Morpheus",
        playedBy: "Laurence Fishburne"
      },
      {
        name: "	Trinity",
        playedBy: "Carrie-Anne Moss"
      }
    ]
  },
  {
    name: "The Matrix Revolutions",
    year: 2003,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    country: "USA",
    imdbLink: "https://www.imdb.com/title/tt0242653/",
    wikipedia: "https://sh.wikipedia.org/wiki/The_Matrix_Revolutions",
    rating: 7,
    summary: "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
    characters: [
      {
        name: "Neo",
        playedBy: "Keanu Reeves"
      },
      {
        name: "Morpheus",
        playedBy: "Laurence Fishburne"
      },
      {
        name: "	Trinity",
        playedBy: "Carrie-Anne Moss"
      }
    ]
  }
];

var checkIfLoggedIn = (req, res, next) => {
  var token = req.get('X-AUTH-HEADER');
  var user = jwt.decode(token);
  if (user && user.user) {
    return next();
  }
  return res.status(403).json({ msg: 'Please login to access this information' });
};

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundMovies = movies.filter(
      (movie) => movie.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundMovies);
  }

  return res.status(200).json(movies);
});

router.get('/:name', (req, res) => {
  let movieName = req.params.name;
  const foundMovie = movies.find((movie) => movie.name == movieName);
  if (foundMovie) {
    res.json(foundMovie);
  } else {
    return res.status(400).json({ msg: 'Movie with name ' + movieName + ' not found.' })
  }
});

router.post('/', checkIfLoggedIn, (req, res) => {
  let newMovie = req.body;

 const foundMovie = movies.find((movie) => movie.name == newMovie.name);

  if (foundMovie) {
    return res.status(400)
      .json({ msg: 'Movie seems to already have an id assigned' });
  }

 // movie.name = movies.length + 1;
  //movie.rating = 0;
  movies.push(newMovie);
  return res.status(200).json(newMovie);
});

router.patch('/:name', checkIfLoggedIn, (req, res) => {
  let movieName = req.params.name;

  const foundMovie = movies.find((movie) => movie.name == movieName);


  if (foundMovie) {
    let changeInQuantity = req.body.changeInQuantity;
    foundMovie.rating += changeInQuantity;
    return res.status(200).json({ msg: 'Successfully updated rating' });
  }

  return res.status(400).json({ msg: 'Movie with name ' + movieName + ' not found.' });
});

module.exports = router;