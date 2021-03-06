const express = require('express'); 
const { getUsers, getUser, updateUser, deleteUser, getProfilePicture, addProfilePicture } = require(`../controllers/user`);
const User = require('../models/UserModel');
const { requireAuth, checkUser } = require('../middleware/auth');
const { userPermission } = require('../middleware/user');
const router = express.Router(); 

router.get(`/users`, getUsers);
router.get(`/user/:id`, requireAuth, getUser);
router.put(`/update/:id/`, requireAuth, userPermission, updateUser);
router.delete(`/delete`, requireAuth, userPermission, deleteUser);
router.get(`/users/profilePicture/:id`, getProfilePicture);
router.post(`/users/profilePicture`, requireAuth, addProfilePicture);


module.exports = router;
