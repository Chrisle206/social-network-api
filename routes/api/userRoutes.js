const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  updateSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteUser);

// /api/Users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').post(addFriend).delete(removeFriend);

module.exports = router;
