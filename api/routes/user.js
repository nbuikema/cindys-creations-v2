const express = require('express');
const router = express.Router();

const {userById, readUser, updateUser, deleteUser, readUserOrderHistory} = require('../controllers/user');
const {isSignedIn, isAuth} = require('../controllers/auth');

// createUser = auth-signup/signin/signout
router.get('/user/read/:userId', isSignedIn, isAuth, readUser);
router.get('/user/read/orders/:userId', isSignedIn, isAuth, readUserOrderHistory);
router.put('/user/update/:userId', isSignedIn, isAuth, updateUser);
router.delete('/user/delete/:userId', isSignedIn, isAuth, deleteUser);

router.param('userId', userById);

module.exports = router;