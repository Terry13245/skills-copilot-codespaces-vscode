// Create web server

// Import express
const express = require('express');

// Import path
const path = require('path');

// Import router
const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import model
const Comment = require('../models/comment');

// Import authentication
const auth = require('../middleware/auth');

// Import controllers
const commentsController = require('../controllers/comments');

// Get all comments
router.get('/', commentsController.getComments);

// Get comment by id
router.get('/:id', commentsController.getCommentById);

// Post comment
router.post('/', auth, commentsController.postComment);

// Put comment
router.put('/:id', auth, commentsController.putComment);

// Delete comment
router.delete('/:id', auth, commentsController.deleteComment);

// Export router
module.exports = router;

