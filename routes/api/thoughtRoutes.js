const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
router.route('/').get(getThoughts);

router.route('/:userId').post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:thoughtId/friends
router.route('/:thoughtId/reactions').post(addReaction);

// /api/Thoughts/:thoughtId/friends/:friendsId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
module.exports = router;
