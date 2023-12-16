const express = require('express');
const router = express.Router();
const Story = require('../models/book');

router.get('/stories', (req, res) => {
  Story.findAll().then((stories) => {
    res.json(stories);
  });
});

router.get('/search', (req, res) => {
  const query = req.query.q;

  Story.findAll({
    where: {
      title: {
        [Sequelize.Op.iLike]: `%${query}%`
      }
    }
  }).then((searchResults) => {
    res.json(searchResults);
  });
});

router.get('/filter', (req, res) => {
  const genre = req.query.genre;
  const ratings = req.query.ratings;

  // Implement filtering logic based on genre and ratings
  // ...

  Story.findAll({
    where: {
      genre: genre,
      ratings: ratings
    }
    // Add other filtering conditions as needed
  }).then((filteredStories) => {
    res.json(filteredStories);
  });
});
module.exports = router;
