const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/Users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/Users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
